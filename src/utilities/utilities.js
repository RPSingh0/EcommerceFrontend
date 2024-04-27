export function getRoundedValueWithPointFivePrecision(number) {
    if (Number.isInteger(number)) {
        return number; // If the number is already an integer, no rounding needed
    } else {
        let decimal = number - Math.floor(number); // Get the decimal part of the number
        if (decimal <= 0.25) {
            return Math.floor(number); // Round down to the nearest whole number
        } else if (decimal >= 0.75) {
            return Math.ceil(number); // Round up to the nearest whole number
        } else {
            return Math.floor(number) + 0.5; // Round to the nearest 0.5
        }
    }
}