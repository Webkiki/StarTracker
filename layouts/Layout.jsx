import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white p-4 sm:p-6 lg:p-8 pt-24 w-full">
      <Navbar />

      <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/milkysky.jpg')] bg-cover bg-no-repeat z-[-1]"></div>

      <main className="flex-1 pt-16 p-4 sm:p-6 md:p-8">{children}</main>

      <footer className="bg-black bg-opacity-80 text-center text-sm sm:text-lg py-6 mt-8">
        <p className="text-gray-300 mb-4 px-4 sm:px-8">
          "Universul este plin de mistere, iar stelele sunt farurile care ne
          călăuzesc prin întuneric."
        </p>
        <div className="flex flex-wrap justify-center space-x-6 mb-4 px-4 sm:px-8">
          <a
            href="https://www.nasa.gov/"
            target="_blank"
            className="text-white hover:text-blue-500 mb-2 sm:mb-0"
          >
            NASA
          </a>
          <a
            href="https://www.esa.int/"
            target="_blank"
            className="text-white hover:text-blue-500 mb-2 sm:mb-0"
          >
            ESA
          </a>
          <a
            href="https://www.spacex.com/"
            target="_blank"
            className="text-white hover:text-blue-500 mb-2 sm:mb-0"
          >
            SpaceX
          </a>
          <a
            href="https://hubblesite.org/"
            target="_blank"
            className="text-white hover:text-blue-500 mb-2 sm:mb-0"
          >
            Hubble Space Telescope
          </a>
          <a
            href="https://ro.wikipedia.org/wiki/Stea"
            target="_blank"
            className="text-white hover:text-blue-500 mb-2 sm:mb-0"
          >
            Wikipedia - Stele
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-4 px-4 sm:px-8">
          <a
            href="https://www.nasa.gov/"
            target="_blank"
            className="text-white hover:text-blue-500"
          >
            NASA API
          </a>
        </div>
        <div className="text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 AstroExplorer. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
