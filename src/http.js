export const fetchAvailablePlaces = async () => {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Error Fetching the Data!!");
  }

  return resData.places;
};

export const fetchUserPlaces = async () => {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Error Fetching the User Places!!");
  }

  return resData.places;
};

export const updateUserPlaces = async (places) => {
  const response = await fetch("http://localhost:3000/user-placess", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      //header is for meta data
      "Content-Type": "application/json", //This tells the backend that the data attached is in JSON format.
    },
  });

  const resData = response.json();

  if (!response.ok) {
    throw new Error("Failed to Update User Data!!");
  }

  return resData.message;
};
