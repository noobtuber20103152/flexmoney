function isAgeValid(age: any) {
  return Number(age) > 18 && Number(age) < 65;
}
export default isAgeValid;
