export function isValidCnpjFormat(cnpj) {
  const regexWithSpecialCharacters = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  const regexWithoutSpecialCharacters = /^\d{14}$/;

  return (
    regexWithSpecialCharacters.test(cnpj) ||
    regexWithoutSpecialCharacters.test(cnpj)
  );
}

export function validateCNPJ(cnpj) {
  let firstDigit;
  let secondDigit;
  let suffixNumber = "";
  const suffix = cnpj.slice(8, 12);

  suffix.forEach((element) => {
    suffixNumber += element.toString();
  });

  if (suffixNumber === "0000") return false;

  firstDigit = 5 * cnpj[0] + 4 * cnpj[1] + 3 * cnpj[2] + 2 * cnpj[3];
  firstDigit += 9 * cnpj[4] + 8 * cnpj[5] + 7 * cnpj[6] + 6 * cnpj[7];
  firstDigit += 5 * cnpj[8] + 4 * cnpj[9] + 3 * cnpj[10] + 2 * cnpj[11];
  firstDigit = 11 - (firstDigit % 11);
  firstDigit = firstDigit >= 10 ? 0 : firstDigit;

  secondDigit = 6 * cnpj[0] + 5 * cnpj[1] + 4 * cnpj[2] + 3 * cnpj[3];
  secondDigit += 2 * cnpj[4] + 9 * cnpj[5] + 8 * cnpj[6] + 7 * cnpj[7];
  secondDigit += 6 * cnpj[8] + 5 * cnpj[9] + 4 * cnpj[10] + 3 * cnpj[11];
  secondDigit += 2 * cnpj[12];
  secondDigit = 11 - (secondDigit % 11);
  secondDigit = secondDigit >= 10 ? 0 : secondDigit;

  return firstDigit === cnpj[12] && secondDigit === cnpj[13];
}
