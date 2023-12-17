function isValidIndianPINCode(pinCode: any) {
  // Check if the input is a string containing 6 digits
  const pinCodeRegex = /^\d{6}$/;
  return pinCodeRegex.test(pinCode);
}
function isValidAddress(address: any) {
  if (address.street.length == 0) return false;
  else if (address.state == "state") return false;
  else if (!isValidIndianPINCode(address.zipCode)) return;
  false;
  return true;
}

export default isValidAddress;
