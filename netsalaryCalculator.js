const readline = require('readline-sync');

function calculateNetSalary(basicSalary, benefits) {
    const payeeTax = basicSalary * 0.1; // Assuming tax is 10% of the basic salary
    const nhifDeduction = 1000; // Assuming NHIF deduction is a fixed amount
    const nssfDeduction = 200; // Assuming NSSF deduction is a fixed amount

    const grossSalary = basicSalary + benefits;
    const totalDeductions = payeeTax + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        payeeTax: payeeTax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        totalDeductions: totalDeductions,
        netSalary: netSalary
    };
}

// Example usage:
let basicSalary = parseFloat(prompt("Enter basic salary:"));
let benefits = parseFloat(prompt("Enter benefits:"));

let salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: KSh ${salaryDetails.grossSalary}`);
console.log(`Payee Tax: KSh ${salaryDetails.payeeTax}`);
console.log(`NHIF Deduction: KSh ${salaryDetails.nhifDeduction}`);
console.log(`NSSF Deduction: KSh ${salaryDetails.nssfDeduction}`);
console.log(`Total Deductions: KSh ${salaryDetails.totalDeductions}`);
console.log(`Net Salary: KSh ${salaryDetails.netSalary}`);
