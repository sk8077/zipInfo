// Import React and other necessary modules if needed

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-xl font-semibold">Your Company Name</p>
        <p className="mt-2">123 Main Street, Cityville, State 12345</p>
        <p className="mt-2">info@yourcompany.com</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
