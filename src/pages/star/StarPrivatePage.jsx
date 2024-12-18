import { useState, useEffect } from "react";
import axios from "axios";
import StarForm from "./StarForm";
import Layout from "../../layouts/Layout";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StarPrivatePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [stars, setStars] = useState([]); // Lista stelelor
  const [formData, setFormData] = useState({
    id: "",
    denumire: "",
    tip: "",
    varsta: "",
    distanta: "",
    luminozitate: "",
    descriere: "",
    imagineUrl: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Deschiderea modalului pt editare

  // incarca stelele din baza de date
  const fetchStars = async () => {
    try {
      const response = await axios.get("http://localhost:3000/stele");
      setStars(response.data); // salveaza stelele in "stars"
    } catch (error) {
      console.log("Eroare la încărcarea stelelor:", error);
    }
  };

  useEffect(() => {
    fetchStars(); //aducem datele de pe server
  }, []);

  // functie stergere
  const handleDeleteStar = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/stele/${id}`);
      setStars(stars.filter((star) => star.id !== id)); // Actualizare lista locala
    } catch (error) {
      console.log("Eroare la ștergerea stelei:", error);
    }
  };

  // formular editare
  const handleEditStar = (star) => {
    setFormData(star);
    setIsModalOpen(true);
  };

  // actualizare steaua editata
  const handleUpdateStar = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/stele/${formData.id}`, formData); //pentru a modifica exact steaua cu id-ul selectat
      setStars(
        stars.map((star) => (star.id === formData.id ? formData : star))
      ); //trecem prin toate stelele, se verifica id-ul stelei selectate si se inlocuiesc datele trimise
      setIsModalOpen(false);
    } catch (error) {
      console.log("Eroare la actualizarea stelei:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <Layout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="text-right mb-4">
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
          >
            Log out
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-6">Stelele Existente</h1>
        <StarForm onAddStar={(newStar) => setStars([...stars, newStar])} />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Lista Stelelor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {stars.map((star) => (
              <div
                key={star.id}
                className=" p-4 rounded-lg shadow-md bg-slate-800 bg-opacity-70 flex flex-col justify-between min-h-[300px]"
              >
                {star.imageUrl && (
                  <img
                    src={star.imageUrl}
                    alt={star.denumire}
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                )}

                <h3 className="text-xl font-semibold">{star.denumire}</h3>
                <p className="text-sm mt-2">{star.descriere}</p>

                <div className="mt-auto flex justify-between gap-4">
                  <button
                    onClick={() => handleEditStar(star)}
                    className="px-4 py-2 bg-blue-600 text-white rounded "
                  >
                    Modifică
                  </button>
                  <button
                    onClick={() => handleDeleteStar(star.id)}
                    className="px-4 py-2 bg-red-700 text-white rounded"
                  >
                    Șterge
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal pentru modificare stea */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-2xl font-semibold mb-4">Modifică Steaua</h2>
              <form
                onSubmit={handleUpdateStar}
                className="text-black space-y-4"
              >
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="URL Imagine (ex: https://example.com/image.jpg)"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="denumire"
                  value={formData.denumire}
                  onChange={handleChange}
                  placeholder="Denumire Stea"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="tip"
                  value={formData.tip}
                  onChange={handleChange}
                  placeholder="Tip Stea"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="number"
                  name="varsta"
                  value={formData.varsta}
                  onChange={handleChange}
                  placeholder="Vârsta (milioane de ani)"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="luminozitate"
                  value={formData.luminozitate}
                  onChange={handleChange}
                  placeholder="Luminozitate"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                  name="descriere"
                  value={formData.descriere}
                  onChange={handleChange}
                  placeholder="Descriere"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Salvează Modificările
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Închide
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default StarPrivatePage;
