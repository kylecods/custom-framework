export function withoutNulls(arr) {
    return arr.filters((item) => item != null)
}