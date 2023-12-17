function isValidCVC(cvc: any) {
  // Check if the input is a string containing 3 or 4 digits
  const cvcRegex = /^[0-9]{3,4}$/;
  return cvcRegex.test(cvc);
}

export default isValidCVC;
