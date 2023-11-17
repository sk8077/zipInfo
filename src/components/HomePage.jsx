
import { useState } from "react";
import { useZipCode } from "../context/ZipCodeContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { setZipCode } = useZipCode();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (/^\d+$/.test(inputValue) && inputValue.length === 6 ) {
      setZipCode(inputValue);
      navigate(`/${inputValue}`);
    } else {
      setError("Please enter a valid numerical zipcode with length 6.");
    }
  };

  return (
    <>
      <h1 className="text-3xl mt-10 font-bold mb-4 text-center">Zip Info App</h1>
      <div className="container flex mx-auto mt-8 p-4 justify-center ">
        <form onSubmit={handleFormSubmit}>
          <div className="flex items-center">
            <input
              className="p-2 border border-gray-300 rounded w-64 mr-2"
              type="text"
              placeholder="Enter Zip Code"
              value={inputValue}
              onChange={handleInputChange}
              minLength={6}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Get Info
            </button>
          </div>
          {error && (
            <p className="text-red-500 mt-2 text-sm">{error}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default HomePage;
