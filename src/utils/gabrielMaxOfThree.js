export function gabrielMaxOfThree(num1, num2, num3) {
    
    const a = num1;
    const b = num2;
    const c = num3;

    if (a > b && a > c) {
        return a;
    } else if ( c > b ) {
        return c;
    } else {
        return b;
    }
}

