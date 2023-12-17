function isValidPhoneNumber(phoneNumber: any) {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  // Check if the cleaned phone number is a valid Indian mobile or landline number
  const mobileRegex = /^[6789]\d{9}$/; // Mobile numbers start with 6, 7, 8, or 9
  const landlineRegex = /^[2-9]\d{9}$/; // Landline numbers have an area code starting from 2 to 9

  return (
    mobileRegex.test(cleanedPhoneNumber) ||
    landlineRegex.test(cleanedPhoneNumber)
  );
}
export default isValidPhoneNumber;
