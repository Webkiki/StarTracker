import { useState } from "react";
import axios from "axios";

const StarForm = ({ onAddStar }) => {
  // Setez toate inputurile goale
  const [formData, setFormData] = useState({
    denumire: "",
    tip: "",
    varsta: "",
    distanta: "",
    luminozitate: "",
    descriere: "",
    imagineUrl: "",
  });

  // functie de schimbare a valorilor din formular
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Trimitere formular
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/stele",
        formData
      );
      onAddStar(response.data); // salveaza datele pe server
      setFormData({
        denumire: "",
        tip: "",
        varsta: "",
        distanta: "",
        luminositate: "",
        descriere: "",
        imagineUrl: "",
      });
    } catch (error) {
      console.error("Eroare la adăugarea stelei:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg"
    >
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          name="imagineUrl"
          value={formData.imagineUrl}
          onChange={handleChange}
          placeholder="URL Imagine (ex: https://example.com/image.jpg)"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="denumire"
          value={formData.denumire}
          onChange={handleChange}
          placeholder="Denumire Stea"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="tip"
          value={formData.tip}
          onChange={handleChange}
          placeholder="Tip Stea"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="varsta"
          value={formData.varsta}
          onChange={handleChange}
          placeholder="Vârsta (milioane de ani)"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="distanta"
          value={formData.distanta}
          onChange={handleChange}
          placeholder="Distanță (ani-lumină)"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="luminozitate"
          value={formData.luminozitate}
          onChange={handleChange}
          placeholder="Luminozitate"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="descriere"
          value={formData.descriere}
          onChange={handleChange}
          placeholder="Descriere"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Adaugă Stea
        </button>
      </div>
    </form>
  );
};

export default StarForm;
