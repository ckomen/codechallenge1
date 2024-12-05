function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks < 40) {
        return 'E';
    } else {
        return 'Invalid marks';
    }
}

// Example usage:
let studentMarks = parseInt(prompt("Enter the student's marks:"));
let grade = getGrade(studentMarks);
console.log(`The student's grade is: ${grade}`);
