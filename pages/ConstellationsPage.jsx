import { useState } from "react";
import Layout from "../layouts/Layout";

const constellations = [
  {
    name: "Orion",
    description:
      "Orion este una dintre cele mai vizibile constelații de pe cerul de iarnă. Este formată din 7 stele majore, inclusiv Betelgeuse și Rigel.",
    coordinates: { x: 100, y: 200 },
  },
  {
    name: "Ursa Mare",
    description:
      "Ursa Mare este una dintre cele mai ușor de recunoscut constelații. Cele două stele din capul cozii, Alkaid și Mizar, sunt ușor de observat.",
    coordinates: { x: 300, y: 100 },
  },
  {
    name: "Scorpionul",
    description:
      "Scorpionul este o constelație strălucitoare și distinctivă, cunoscută pentru forma sa de S. Steaua roșie Antares este una dintre cele mai vizibile stele.",
    coordinates: { x: 500, y: 300 },
  },
  {
    name: "Leul",
    description:
      "Leul este o constelație mare și strălucitoare, care reprezintă un leu în mitologia greacă. Steaua Regulus este una dintre cele mai strălucitoare stele ale acestei constelații.",
    coordinates: { x: 650, y: 150 },
  },
  {
    name: "Carul Mic",
    description:
      "Carul Mic este o constelație mică, dar bine cunoscută datorită așa-numitelor 'stele călăuze'. Steaua Polus se află în centrul acestei constelații.",
    coordinates: { x: 400, y: 450 },
  },
  {
    name: "Cassiopeea",
    description:
      "Cassiopeea este o constelație în formă de W și reprezintă o regină mitologică. Este una dintre cele mai vizibile constelații de pe cerul de noapte.",
    coordinates: { x: 750, y: 100 },
  },
  {
    name: "Taurul (Taurus)",
    description:
      "Taurul este o constelație cunoscută pentru steaua sa cea mai strălucitoare, Aldebaran, care face parte din ochiul taurului. În mitologia greacă, Taurul reprezenta animalul transformativ în care Zeus s-a transformat pentru a răpi prințesa Europa. Constelația mai conține și nebuloasa Inelului de fum.",
    coordinates: { x: 550, y: 200 },
  },
  {
    name: "Vulturul (Aquila)",
    description:
      "Constelația Vulturul este una dintre cele mai distinctive constelații de vară și conține steaua Altair, care este una dintre cele mai strălucitoare stele de pe cer. În mitologia greacă, vulturul era asociat cu Zeus, care își trimitea vulturul pentru a-i aduce fulgerele.",
    coordinates: { x: 600, y: 400 },
  },
  {
    name: "Fecioara (Virgo)",
    description:
      "Fecioara este una dintre cele 12 constelații zodiacale și este una dintre cele mai mari constelații de pe cer. Steaua sa principală este Spica, care este o supergigantă albastră. În mitologia romană, Fecioara reprezenta zeița Ceres, care simboliza recolta.",
    coordinates: { x: 200, y: 100 },
  },
  {
    name: "Gemeni (Gemini)",
    description:
      "Constelația Gemeni este bine cunoscută datorită celor două stele principale, Castor și Pollux, care reprezintă frații gemeni din mitologia greacă. Aceștia erau fii ai lui Zeus și ai Ledei. Constelația este vizibilă pe cerul de iarnă și este una dintre cele 12 constelații zodiacale.",
    coordinates: { x: 350, y: 500 },
  },
  {
    name: "Săgetătorul (Sagittarius)",
    description:
      "Constelația Săgetătorului este una dintre cele mai ușor de recunoscut constelații de vară, cunoscută pentru forma sa de arcaș care trage cu săgeata către centrul Căii Lactee. Steaua sa principală, Kaus Australis, este o stea gigantă roșie. În mitologia greacă, Săgetătorul este un centaur, o creatură mitologică jumătate om, jumătate cal.",
    coordinates: { x: 750, y: 300 },
  },
];

const ConstellationPage = () => {
  const [constelatieSel, setConstelatieSel] = useState(null);

  const handleClick = (constelatie) => {
    setConstelatieSel(constelatie);
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
        <div>
          <div className="w-full h-[600px] bg-cover bg-center relative">
            {constellations.map((constelatie, index) => (
              <button
                key={index}
                onClick={() => handleClick(constelatie)}
                className="absolute"
                style={{
                  top: `${constelatie.coordinates.y}px`,
                  left: `${constelatie.coordinates.x}px`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  cursor: "pointer",
                  boxShadow:
                    constelatieSel?.name === constelatie.name
                      ? "0 0 25px 10px rgba(255, 255, 255, 0.8)"
                      : "0 0 8px 2px rgba(255, 255, 255, 0.6)",
                }}
              >
                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto w-1.5 h-1.5 border-t-2 border-r-2 border-b-2 border-l-2 border-white rotate-45 transform origin-center" />
              </button>
            ))}
          </div>

          {constelatieSel && (
            <div className="mt-4 p-4 rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-xl font-bold text-white">
                {constelatieSel.name}
              </h2>
              <p className="text-white">{constelatieSel.description}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ConstellationPage;
