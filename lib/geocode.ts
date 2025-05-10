import axios from "axios";

const geocodeLocation = async (area: string) => {
  const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: area,
      key: process.env.GOOGLE_MAPS_API_KEY
    }
  });
  if (response.data.results.length === 0) throw new Error('Location not found');
  const { lat, lng } = response.data.results[0].geometry.location;
  return { longitude: lng, latitude: lat };
};


export default geocodeLocation;