import { useState, useEffect } from "react";
import axios from "axios";
import ConstellationForm from "./ConstellationForm";
import Layout from "../../layouts/Layout";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import EditConstellations from "./EditConstellations";

const ConstellationPrivatePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [constellations, setConstellations] = useState([]); // Lista constelațiilor
  const [isModalOpen, setIsModalOpen] = useState(false); // Deschiderea modalului pentru editare
  const [selectedConstellation, setSelectedConstellation] = useState(null); // Constelația selectată pentru editare

  // Încarcă constelațiile din baza de date
  const fetchConstellations = async () => {
    try {
      const response = await axios.get("http://localhost:3000/constelatii");
      setConstellations(response.data); // Salvează constelațiile în "constellations"
    } catch (error) {
      console.log("Eroare la încărcarea constelațiilor:", error);
    }
  };

  useEffect(() => {
    fetchConstellations(); // Aducem datele de pe server
  }, []);

  // Funcție pentru ștergerea unei constelații
  const handleDeleteConstellation = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/constelatii/${id}`);
      setConstellations(
        constellations.filter((constellation) => constellation.id !== id)
      ); // Actualizare lista locală
    } catch (error) {
      console.log("Eroare la ștergerea constelației:", error);
    }
  };

  const handleUpdateConstellation = (updatedConstellation) => {
    setConstellations((prevConstellations) =>
      prevConstellations.map((constellation) =>
        constellation.id === updatedConstellation.id
          ? updatedConstellation
          : constellation
      )
    );
  };

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  // Funcție pentru deschiderea formularului de editare
  const handleEditConstellation = (constellation) => {
    setSelectedConstellation(constellation);
    setIsModalOpen(true);
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
        <h1 className="text-3xl font-bold mb-6">Constelațiile Existente</h1>
        <ConstellationForm
          onAddConstellation={(newConstellation) =>
            setConstellations([...constellations, newConstellation])
          }
        />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Lista Constelațiilor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {constellations.map((constellation) => (
              <div
                key={constellation.id}
                className="p-4 rounded-lg shadow-md bg-slate-700 flex flex-col justify-between min-h-[300px]"
              >
                {/* Imagine constelație */}
                {constellation.imageUrl && (
                  <img
                    src={constellation.imageUrl}
                    alt={constellation.name}
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                )}

                <h3 className="text-xl font-semibold">{constellation.name}</h3>
                <p className="text-sm mt-2">{constellation.description}</p>

                <div className="mt-auto flex justify-between gap-4">
                  <button
                    onClick={() => handleEditConstellation(constellation)}
                    className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
                  >
                    Modifică
                  </button>
                  <button
                    onClick={() => handleDeleteConstellation(constellation.id)}
                    className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800"
                  >
                    Șterge
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal pentru modificare constelație */}
        {isModalOpen && (
          <EditConstellations
            constellation={selectedConstellation}
            onClose={() => setIsModalOpen(false)}
            onUpdate={handleUpdateConstellation}
          />
        )}
      </div>
    </Layout>
  );
};

export default ConstellationPrivatePage;
