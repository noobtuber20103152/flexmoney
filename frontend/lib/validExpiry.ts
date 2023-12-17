function isValidExpiryDate(expiryDate: any) {
  // Check if the input is a string in the format MM/YY
  const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!dateRegex.test(expiryDate)) {
    return false; // Invalid format
  }

  // Extract month and year from the input
  const [inputMonth, inputYear] = expiryDate.split("/").map(Number);

  // Check if the date is in the future
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get the last two digits of the current year
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed

  return (
    inputYear > currentYear ||
    (inputYear === currentYear && inputMonth >= currentMonth)
  );
}

export default isValidExpiryDate;
