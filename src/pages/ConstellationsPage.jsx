import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layouts/Layout";

const ConstellationsPage = () => {
  const [constelatii, setConstelatii] = useState([]);
  const [constelatieSel, setConstelatieSel] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchConstelatii = async () => {
      try {
        const response = await axios.get("http://localhost:3000/constelatii");
        setConstelatii(response.data); // setează constelatii
      } catch (error) {
        console.log("Eroare la încărcarea constelațiilor:", error);
      }
    };

    fetchConstelatii();
  }, []);

  const handleClick = (constelatie) => {
    setConstelatieSel(constelatie);
    setIsExpanded(false);
  };
  //toggle pt expand
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Scalare pentru distribuire pe pagina
  const scaleCoordinates = (coordinate, max) => {
    return (coordinate / max) * 100;
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
          <h1 className="text-3xl text-white font-bold text-center mb-6 sm:text-2xl xs:text-xl">
            Constelațiile: Ghidul Stelelor și al Călătoriilor Celeste
          </h1>
          <p className="text-lg text-white leading-relaxed text-justify max-w-3xl mx-auto sm:text-base">
            Constelațiile sunt grupuri de stele care formează modele sau figuri
            imaginate de oameni pe cerul nopții. De-a lungul istoriei,
            civilizațiile din întreaga lume le-au folosit pentru orientare,
            măsurarea timpului și chiar în scopuri mitologice. Fiecare
            constelație are o poveste proprie și adesea este asociată cu zei,
            eroi sau animale, reflectând astfel cultura și credințele
            respective. În prezent, constelațiile continuă să fie importante
            pentru astronomi și amatori, oferind puncte de referință pe cerul
            vast și misterios al Universului.
          </p>
        </div>
        <div className="relative w-full h-[600px] ">
          {/* Punctele pentru constelații */}
          {constelatii.map((constelatie, index) => {
            // Max coordonatele pentru scalare (depinde de dimensiune hartă)
            const maxWidth = 90; // maxul pentru scalare X
            const maxHeight = 90; // maxul pentru scalare Y

            // Scalare coordonate
            const scaledX = scaleCoordinates(
              constelatie.coordinates.x,
              maxWidth
            );
            const scaledY = scaleCoordinates(
              constelatie.coordinates.y,
              maxHeight
            );

            return (
              <div
                key={index}
                className="relative"
                style={{
                  top: `${scaledY}%`, // scalare pe Y
                  left: `${scaledX}%`, // scalare pe X
                }}
              >
                <button
                  className={`absolute w-6 h-6 rounded-full bg-white cursor-pointer shadow-lg ${
                    constelatieSel?.id === constelatie.id ? "animate-pulse" : ""
                  }`}
                  onClick={() => handleClick(constelatie)}
                />
                {/* Afișează descrierea constelației lângă buton */}
                {constelatieSel?.id === constelatie.id && (
                  <div className="absolute left-8 top-0 p-4 bg-slate-800 bg-opacity-80 text-white rounded-lg shadow-lg w-60">
                    <h2 className="text-xl font-bold">{constelatie.name}</h2>

                    <p>{constelatie.description}</p>
                    {isExpanded && (
                      <div>
                        {" "}
                        <p>
                          <strong>Sezon:</strong>
                          {constelatie.season}
                        </p>
                        <p>
                          <strong>Mitologie:</strong>
                          {constelatie.mythology}
                        </p>
                        <p>
                          <strong>Stele:</strong>
                          {constelatie.majorStars}
                        </p>
                        <p>
                          <strong>Tip:</strong>
                          {constelatie.type}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={toggleExpand}
                      className="mt-4 text-blue-400"
                    >
                      {isExpanded ? "Ascunde detalii" : "Vezi mai multe"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ConstellationsPage;
