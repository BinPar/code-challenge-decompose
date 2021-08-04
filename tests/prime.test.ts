import primeFactors from '../src/primeFactors';

export default test('Given a number return its prime numbers', (): void => {
    expect(primeFactors(1)).toStrictEqual([]);
    expect(primeFactors(6)).toStrictEqual([2, 3]);
    expect(primeFactors(8)).toStrictEqual([2, 2, 2]);
    expect(primeFactors(12)).toStrictEqual([2 ,2 , 3]);
    expect(primeFactors(17)).toStrictEqual([17]);
    expect(primeFactors(60)).toStrictEqual([2, 2, 3, 5]);
    expect(primeFactors(84)).toStrictEqual([2, 2, 3, 7]);
    expect(primeFactors(186)).toStrictEqual([2, 3, 31]);
    expect(primeFactors(252)).toStrictEqual([2, 2, 3, 3, 7]);    
    for (let x=1;x<50000;x++) {
      const result = primeFactors(x);
      expect(result.reduce((t,c) => t * c ,1)).toBe(x);
    }
})