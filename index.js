const moment = require("moment");

const getFinancialYear = (date, previous = 0) => {
	const inputDate = moment(date);

	let startYear = inputDate.year();
	let endYear = inputDate.year();

	if (inputDate.month() < 3) {
		startYear -= 1;
	} else {
		endYear += 1;
	}

	if (previous) {
		startYear -= 1;
		endYear -= 1;
	}
	return { startYear, endYear };
};

//Case-1: month > march

const now = moment();
console.log("Today: ", now.format("DD-MM-YYYY"));
let financialYear = getFinancialYear(now);
console.log(`Current Financial Year: ${financialYear.startYear}-${financialYear.endYear}`);

let previosfinancialYear = getFinancialYear(now, 1);
console.log(`Previous Financial Year: ${previosfinancialYear.startYear}-${previosfinancialYear.endYear}`);

//Case-2: month <= march

// let day = moment("25-01-2024", ["DD-MM-YYYY"]);
// console.log("Today: ", day.format("DD-MM-YYYY"));
// let financialYear = getFinancialYear(day);
// console.log(`Current Financial Year: ${financialYear.startYear}-${financialYear.endYear}`);

// let previosfinancialYear = getFinancialYear(day, 1);
// console.log(`Previous Financial Year: ${previosfinancialYear.startYear}-${previosfinancialYear.endYear}`);
