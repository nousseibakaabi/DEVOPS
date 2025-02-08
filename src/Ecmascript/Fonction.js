
// Global variable to track the last used ID
let lastId = 0;

// Function to search for an object by its ID
export const Search = (array, id) => {
  return array.find((item) => item.ID === id);
};

// Function to add a new entry to the array with an incremented ID
export const addEntry = (array, entry) => {
  lastId += 1; // Increment the global ID
  const newEntry = { ...entry, ID: lastId }; // Add the ID to the object
  array.push(newEntry); // Add the new entry to the array
  return newEntry; // Return the added entry
};
