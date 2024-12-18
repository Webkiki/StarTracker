import Layout from "./layouts/Layout";
import PicDay from "./components/PicDay";
import Mars from "./components/Mars";

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4 py-6">
        <div className="p-6 text-center">
          <h1 className="py-6 text-2xl">
            <strong>
              Explorând Cerul: Stele, Constellatii și Misterele Universului
            </strong>
          </h1>
          <p className="py-4">
            Universul este o pânză vastă de stele, fiecare cu o poveste unică, o
            istorie legendară, o destinație îndepărtată. Dincolo de infinitatea
            cerului, constelațiile formează tipare misterioase care au ghidat
            călători și exploratori încă din cele mai vechi timpuri. De la
            mituri antice la descoperiri științifice uluitoare, stelele și
            constelațiile sunt farurile care ne luminează calea în cunoaștere și
            curiozitate. Intră în lumea fascinantă a cerului nocturn, unde
            fiecare stea îți va spune o poveste despre naștere, viață și moarte.
            Explorează cele mai renumite constelații și află cum acestea ne
            influențează percepțiile, mitologia și știința. Lasă-te captiv de
            frumusețea fără margini a universului, acoperit de stele, iar
            călătoria ta cosmică abia începe!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 p-4">
          <div className="bg-slate-900  shadow-lg shadow-black rounded-xl overflow-hidden p-4 flex-1">
            <PicDay />
          </div>

          <div className="bg-slate-900 shadow-lg shadow-black rounded-xl overflow-hidden p-4 flex-1">
            <Mars />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
