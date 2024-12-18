import { useState } from "react";
import axios from "axios";

const ConstellationForm = ({ onAddConstellation }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    coordinates: { x: "", y: "" },
    season: "",
    mythology: "",
    type: "",
    majorStars: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "x" || name === "y") {
      setFormData((prevData) => ({
        ...prevData,
        coordinates: {
          ...prevData.coordinates,
          [name]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/constelatii", // URL-ul pentru adăugarea constelațiilor
        formData
      );
      onAddConstellation(response.data); // Salvează constelația în aplicație
      setFormData({
        name: "",
        description: "",
        coordinates: { x: "", y: "" },
        season: "",
        mythology: "",
        type: "",
        majorStars: "",
      });
    } catch (error) {
      console.error("Eroare la adăugarea constelației:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg text-black"
    >
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nume Constelație"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Coordonatele (X și Y) */}
        <div className="flex space-x-4">
          <input
            type="number"
            name="x"
            value={formData.coordinates.x}
            onChange={handleChange}
            placeholder="Coordonata X"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="y"
            value={formData.coordinates.y}
            onChange={handleChange}
            placeholder="Coordonata Y"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="text"
          name="season"
          value={formData.season}
          onChange={handleChange}
          placeholder="Sezon (ex: iarnă, vară)"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="mythology"
          value={formData.mythology}
          onChange={handleChange}
          placeholder="Mitologia constelației"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Tip (ex: zodiacală, asterism)"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="majorStars"
          value={formData.majorStars}
          onChange={handleChange}
          placeholder="Stele majore (separate prin virgulă)"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descriere Constelație"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Adaugă Constelație
        </button>
      </div>
    </form>
  );
};

export default ConstellationForm;
