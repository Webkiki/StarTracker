const Modal = ({ show, closeModal, starDetails }) => {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-50 outline-none focus:outline-none">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative w-full max-w-lg mx-4 bg-slate-900 rounded-lg shadow-lg p-6">
          <div className="flex items-start justify-between p-4 border-b border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold text-white break-words max-w-full">
              {starDetails?.denumire}
            </h3>
            <button
              className="p-1 bg-transparent text-white opacity-75 hover:opacity-100 focus:outline-none text-3xl"
              onClick={closeModal}
            >
              ×
            </button>
          </div>

          <div className="flex flex-col items-center p-6">
            <img
              src={starDetails?.imageUrl}
              alt={starDetails?.denumire}
              className="w-48 h-48 object-cover rounded-full mb-4"
            />
            <div className="text-white">
              <p>
                <strong>Tip:</strong> {starDetails?.tip}
              </p>
              <p>
                <strong>Varsta:</strong> {starDetails?.varsta} milioane de ani
              </p>
              <p>
                <strong>Distanta:</strong> {starDetails?.distanta} ani-lumină
              </p>
              <p>
                <strong>Luminozitate:</strong> {starDetails?.luminozitate}
              </p>
              <p>
                <strong>Descriere:</strong> {starDetails?.descriere}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
