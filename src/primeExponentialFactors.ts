import primeFactors from './primeFactors';

const primeExponentialFactors = (x: number): Map<number, number> => {
  const result = new Map<number, number>();
  const factors = primeFactors(x);
  factors.forEach((factor) => {
    const current = result.get(factor) ?? 0;
    result.set(factor, current + 1);
  });
  return result;
};

export default primeExponentialFactors;