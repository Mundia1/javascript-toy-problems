function calculateNetSalary(basicSalary, benefits) {
    // Gross Salary
    const grossSalary = basicSalary + benefits;
    
    // PAYE (Tax) calculation based on KRA rates (simplified for 2025)
    let payee;
    if (grossSalary <= 24000) payee = grossSalary * 0.1;
    else if (grossSalary <= 32333) payee = 2400 + (grossSalary - 24000) * 0.25;
    else payee = 4483.25 + (grossSalary - 32333) * 0.3;
    
    // NHIF Deductions (simplified rates)
    let nhif;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else nhif = 1000;
    
    // NSSF Deductions (6% of pensionable pay, max 1080)
    const nssf = Math.min(basicSalary * 0.06, 1080);
    
    // Net Salary calculation
    const netSalary = grossSalary - payee - nhif - nssf;
    
    return {
        grossSalary: grossSalary,
        payee: payee.toFixed(2),
        nhif: nhif,
        nssf: nssf.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

// Test the function
console.log(calculateNetSalary(50000, 10000));