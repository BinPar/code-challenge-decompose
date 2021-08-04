const primeFactors = (
  x: number,
  primeFactorsList = new Array<number>(),
): number[] => {
  for (let index = 2; index <= x; index++) {
    if (x % index === 0) {
      return primeFactors(x / index, [...primeFactorsList, index]);
    }
  }
  return primeFactorsList;
};

export default primeFactors;
