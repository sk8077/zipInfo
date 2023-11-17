import { useEffect, useState } from "react";
import { useZipCode } from "../context/ZipCodeContext";
import axios from "axios";

const InfoPage = () => {
  const { zipCode, data, setData, setError } = useZipCode();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.zippopotam.us/in/${zipCode}`
        );
        const formattedData = formatData(response.data);
        setData(formattedData);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    if (zipCode) {
      fetchData();
    }
  }, [zipCode, setData, setError]);

  const formatData = (apiData) => {
    const places = apiData.places.map((place) => ({
      placeName: place["place name"],
      longitude: place.longitude,
      state: place.state,
      stateAbbreviation: place["state abbreviation"],
      latitude: place.latitude,
    }));

    return {
      zipCode: apiData["post code"],
      country: apiData.country,
      countryAbbreviation: apiData["country abbreviation"],
      places: places,
    };
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded shadow-lg max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Zip Information</h1>
      {loading ? (
        <p className="text-center mt-10 font-semibold text-blue-800">Loading...</p>
      ) : data ? (
        <div>
          <h2 className="text-xl mb-2 font-semibold text-white">Data for {zipCode}</h2>

          <h3 className="text-lg mt-4 mb-2 text-white">Places:</h3>
          <ul>
            {data.places.map((place, index) => (
              <li key={index} className="mb-2 text-white">
                <strong>{place.placeName}</strong> - {place.state}
              </li>
            ))}
          </ul>
          <p className="mb-2 text-white">Country: {data.country}</p>
        </div>
      ) : (
        <p className="text-center mt-10 font-semibold text-red-800">
          {zipCode ? "Data not available for this zipcode" : ""}
        </p>
      )}
    </div>
  );
};

export default InfoPage;
