import { useState, useEffect } from "react";
import axios from "axios";

const PicDay = () => {
  const [todayPicture, setTodayPicture] = useState(null);
  const [loading, setLoading] = useState(true); // se seteaza true pentru a arata incarcarea
  const [date, setDate] = useState(""); // stocheaza data selectata
  const [error, setError] = useState(null); // reseteaza eroarea la fiecare incarcare

  // Obtinere poza dintr-o data specifica
  const fetchPictureOfTheDay = async (selectedDate) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ukHpp6MTES0FEJVsXC0J8rUGxS4Ez8vEc5FtaLO0&date=${selectedDate}`
      );
      setTodayPicture(response.data); // salveaza datele despre imagine
    } catch (err) {
      setError("Eroare încărcare fotografie.");
    }
    setLoading(false); // dupa incarcare este fals - datele au fost incarcate
  };

  useEffect(() => {
    // Default la incarcare pagina arata poza zilei din data curenta
    if (!date) {
      fetchPictureOfTheDay(new Date().toISOString().split("T")[0]); // formatare standard, extragere doar data din new Date
    } else {
      fetchPictureOfTheDay(date);
    }
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value); // Actualizeaza data la selectare
  };

  if (loading) {
    return (
      <div className="text-center text-xl text-white">
        Loading Astronomy Picture...
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Calendar */}
      <div className="mb-4">
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          max={new Date().toISOString().split("T")[0]} // Permite doar datele din trecut si prezent
          className="p-2 border border-slate-700 rounded-md bg-slate-700 text-white appearance-none"
        />
      </div>

      {error && <p className="text-red-700">{error}</p>}

      {/* incarca imaginea si datele de pe server */}

      {todayPicture && (
        <div className="text-center">
          <p className="text-sm text-gray-400 font-bold mt-2">
            {todayPicture.date}
          </p>
          {/* trebuie sa verific daca e img sau video ca sa functioneze  verificare mai jos*/}
          {todayPicture.media_type === "image" ? (
            <img
              src={todayPicture.url}
              alt={todayPicture.title}
              className="w-full h-auto max-w-full object-cover rounded-md mb-4"
            />
          ) : todayPicture.media_type === "video" ? (
            <div className="w-full h-auto max-w-full mb-4">
              <iframe
                width="100%"
                height="315"
                src={todayPicture.url}
                title={todayPicture.title}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ) : null}
          <h3 className="text-lg font-bold text-white mt-2">
            {todayPicture.title}
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            {todayPicture.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default PicDay;
