
// Function to find the longest word
export const findLongestWord = (words) => {
  let wordsWithLength = words.map((word) => ({
    mot: word,
    longueur: word.length,
  }));

  let longestWord = wordsWithLength.reduce((longest, current) =>
    current.longueur > longest.longueur ? current : longest
  );

  return `Le mot le plus long est "${longestWord.mot}" avec une longueur de ${longestWord.longueur} caractères.`;
};


// Function to count occurrences of elements
export const countOccurrences = (input) => {
  return input.flat().reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};


// Function to calculate total marks
export const calculateTotalMarks = (students) => {
  return students
    .map((student) => ({
      ...student,
      marks: student.marks < 50 ? student.marks + 15 : student.marks,
    }))
    .filter((student) => student.marks > 50)
    .reduce((sum, student) => sum + student.marks, 0);
};
