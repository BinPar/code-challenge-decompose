import primeExponentialFactors from '../src/primeExponentialFactors';

export default test('Given a number return its prime numbers', (): void => {
    const result = primeExponentialFactors(252);
    const expected = new Map<number,number>();
    expected.set(2,2);
    expected.set(3,2);
    expected.set(7,1);
    expect(result).toStrictEqual(expected);    
});