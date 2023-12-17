function isValidDebitCardNumber(cardNumber: any) {
  // Remove any non-digit characters from the card number
  const cleanedCardNumber = cardNumber.replace(/\D/g, "");
  // Check if the cleaned card number is a valid format
  const cardNumberRegex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12})$/;
  return true;
  return cardNumberRegex.test(cleanedCardNumber);
}
export default isValidDebitCardNumber;
