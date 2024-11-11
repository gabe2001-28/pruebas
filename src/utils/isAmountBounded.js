export function isAmountBounded(value) {
    if (value >= 1 && value <= 1000) {
        return true;
    } else {
        return false;
    }
}