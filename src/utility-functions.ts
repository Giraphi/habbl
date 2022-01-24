export function modulo(n: number, m: number) {
    // will deal correctly with negative numbers, unlike the "%" operator
    return ((n % m) + m) % m;
}
