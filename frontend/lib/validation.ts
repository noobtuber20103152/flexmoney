function isValidIndianPINCode(pinCode: any) {
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

function isAgeValid(age: any) {
  return Number(age) > 18 && Number(age) < 65;
}

function isValidDebitCardNumber(cardNumber: any) {
  const cleanedCardNumber = cardNumber.replace(/\D/g, "");
  const cardNumberRegex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12})$/;
  return true;
  return cardNumberRegex.test(cleanedCardNumber);
}
function isValidPhoneNumber(phoneNumber: any) {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  const mobileRegex = /^[6789]\d{9}$/;
  const landlineRegex = /^[2-9]\d{9}$/;

  return (
    mobileRegex.test(cleanedPhoneNumber) ||
    landlineRegex.test(cleanedPhoneNumber)
  );
}
function isValidCVC(cvc: any) {
  const cvcRegex = /^[0-9]{3,4}$/;
  return cvcRegex.test(cvc);
}
function isValidEmail(email: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidExpiryDate(expiryDate: any) {
  const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!dateRegex.test(expiryDate)) {
    return false;
  }

  const [inputMonth, inputYear] = expiryDate.split("/").map(Number);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;
  return (
    inputYear > currentYear ||
    (inputYear === currentYear && inputMonth >= currentMonth)
  );
}

export {
  isValidAddress,
  isAgeValid,
  isValidDebitCardNumber,
  isValidPhoneNumber,
  isValidCVC,
  isValidEmail,
  isValidExpiryDate,
};
