import { useEffect, useState } from "react";
import axios from "axios";

const EditConstellations = ({ constellation, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(constellation);

  useEffect(() => {
    setFormData(constellation);
  }, [constellation]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Verifică dacă câmpul face parte din obiectul "coordinates"
    if (name === "coordinates.x" || name === "coordinates.y") {
      const [field] = name.split("."); // "coordinates"
      const subField = name.split(".")[1]; // "x" sau "y"

      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subField]: value ? parseFloat(value) : "", // convertește la număr
        },
      }));
    } else {
      // Actualizează restul câmpurilor din formData
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/constelatii/${formData.id}`,
        formData
      );
      onUpdate(response.data);
      onClose();
    } catch (error) {
      console.log("Eroare la actualizarea constelației:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Modifică Constelația</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="URL Imagine"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nume Constelație"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="coordinates.x"
            value={formData.coordinates.x}
            onChange={handleChange}
            placeholder="Coordonata X"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="coordinates.y"
            value={formData.coordinates.y}
            onChange={handleChange}
            placeholder="Coordonata Y"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descriere Constelație"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="season"
            value={formData.season}
            onChange={handleChange}
            placeholder="Sezon"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="mythology"
            value={formData.mythology}
            onChange={handleChange}
            placeholder="Mitologia Constelației"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Tip Constelație"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="majorStars"
            value={formData.majorStars}
            onChange={handleChange}
            placeholder="Stele Majore"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Salvează Modificările
          </button>
        </form>
        <button
          onClick={onClose}
          className="w-full py-2 bg-gray-300 text-black rounded mt-4 hover:bg-gray-400"
        >
          Anulează
        </button>
      </div>
    </div>
  );
};

export default EditConstellations;
