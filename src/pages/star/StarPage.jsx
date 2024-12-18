import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../layouts/Layout";
import Modal from "../../components/Modal";
import Search from "../../components/Search";

const StarPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStar, setSelectedStar] = useState(null);
  const [stars, setStars] = useState([]); // Lista de stele
  const [steleFiltrate, setSteleFiltrate] = useState([]); // Stelele filtrate

  // incarca datele despre stele de pe server
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get("http://localhost:3000/stele");
        setStars(response.data); // salveaza datele in "stars"
        setSteleFiltrate(response.data);
      } catch (error) {
        console.log("Eroare la încărcarea datelor:", error);
      }
    };

    fetchStars(); // incarca datele
  }, []); // Aceasta se va executa doar o data, la montarea componentei

  const openModal = (star) => {
    setSelectedStar(star);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStar(null);
  };

  // Filtrare stele pe baza textului
  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = stars.filter((star) =>
      star.denumire.toLowerCase().includes(lowerCaseQuery)
    );
    setSteleFiltrate(filtered);
  };

  return (
    <Layout>
      <div className="px-4 md:px-8 py-6">
        <div className="bg-gradient-to-r from-slate-700/50 to-grey-950/50 text-white p-8 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-center mb-4">
            Explorează Stelele
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Stelele sunt giganți luminoși care strălucesc în vastitatea cerului,
            fiind sursa principală de lumină și energie pentru Univers. Fiecare
            stea are o viață unică, începând ca o nebuloasă de gaze și praf,
            evoluând prin etape fascinante până la sfârșitul ei dramatic. În
            funcție de mărimea și compoziția lor, stelele pot varia de la pitici
            roșii și galbeni, până la uriași supernovați sau chiar găuri negre.
            Fiecare stea poartă în sine povești de milioane sau chiar miliarde
            de ani, iar distanțele colosale care ne separă de ele ne fac să le
            admirăm ca pe niște lumini misterioase în noaptea infinită a
            cosmosului.
          </p>
          <p className="text-lg mt-4">
            Descoperă aici câteva dintre cele mai remarcabile stele din
            Universul nostru!
          </p>
        </div>
        <Search onSearch={handleSearch} />

        {/* Stelele filtrate */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {steleFiltrate.map((star, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer hover:scale-105 transition-transform duration-300 border border-6 border-blue-900 rounded-sm shadow-xl shadow-blue-900/80"
              onClick={() => openModal(star)}
            >
              <img
                src={star.imageUrl}
                alt={star.denumire}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl text-center text-white">
                {star.denumire}
              </h2>
            </div>
          ))}
        </div>

        {/* Modal stea */}
        {showModal && selectedStar && (
          <Modal
            show={showModal}
            closeModal={closeModal}
            starDetails={selectedStar} // Detalii despre steaua selectata
          />
        )}
      </div>
    </Layout>
  );
};

export default StarPage;
