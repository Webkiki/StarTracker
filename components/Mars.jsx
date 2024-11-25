import { useState, useEffect } from "react";
import axios from "axios";

const Mars = () => {
  const [marsPhotos, setMarsPhotos] = useState([]); // stochez fotografiile
  const [loadingMars, setLoadingMars] = useState(true);

  useEffect(() => {
    const fetchMars = async () => {
      try {
        const { data } = await axios.get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-6-3&api_key=ukHpp6MTES0FEJVsXC0J8rUGxS4Ez8vEc5FtaLO0"
        );
        setMarsPhotos(data.photos || []); // setez fotografiile sau un array gol daca nu sunt poze
      } catch (error) {
        console.log("Error fetching Mars photos:", error);
      }
      setLoadingMars(false);
    };

    fetchMars();
  }, []); // apel API la montarea componentei

  return (
    <div className="max-h-[600px] overflow-y-auto p-4">
      {loadingMars ? (
        <div className="text-center text-white">Loading...</div>
      ) : (
        <div className="flex flex-col space-y-6">
          {/* poze + detalii */}
          {marsPhotos.map((photo) => (
            <div key={photo.id} className="flex flex-row items-center">
              <img
                src={photo.img_src}
                alt={`Mars Photo ${photo.id}`}
                className="w-full max-w-[350px] h-64 object-cover rounded-md mb-4"
              />
              <div className="text-white mt-2 text-center">
                <p className="text-lg font-semibold">{photo.rover.name}</p>
                <p className="text-sm text-gray-400">
                  Camera: {photo.camera.full_name}
                </p>
                <p className="text-sm text-gray-400">
                  Date Taken: {photo.earth_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mars;
