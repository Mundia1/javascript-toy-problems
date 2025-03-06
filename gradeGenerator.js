/**
 * Calculates grade based on student marks
 * @param {number} marks - Student marks
 * @returns {string} Grade (A, B, C, D, E) or error message
 */
function gradeGenerator(marks) {
    const numMarks = Number(marks);
    
    if (isNaN(numMarks) || numMarks < 0 || numMarks > 100) {
        return "Please enter a valid number between 0 and 100";
    }
    
    if (numMarks > 79) return "A";
    else if (numMarks >= 60) return "B";
    else if (numMarks >= 50) return "C";
    else if (numMarks >= 40) return "D";
    else return "E";
}

// Hardcoded student marks (you can change this value)
const studentMarks = 85;  // Example value, modify as needed

// Calculate and display the result
const result = gradeGenerator(studentMarks);
console.log(`Marks: ${studentMarks}`);
console.log(`Grade: ${result}`);