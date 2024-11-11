import { describe, expect, it, test } from "vitest";
import { gabrielMaxOfThree } from "./gabrielMaxOfThree";

describe ('Pruebas para gabrielMaxOfThree', () => {

    // Clase 1
    it('Debe devolver a, cuando el numero mayor es a', () => {
        expect(gabrielMaxOfThree(5,3,4)).toBe(5);
    });

    // Clase 2
    it('Debe devolver b, cuando a no es mayor que b, y c no es mayor que b', () => {
        expect(gabrielMaxOfThree(5,7,6)).toBe(7);
    });

    // Clase 3
    it('Debe devolver c, cuando a es mayor que b, a no es mayor que c, y c es mayor que b', () => {
        expect(gabrielMaxOfThree(5,3,7)).toBe(7);
    });

    // Clase 4
    it('Debe devolver c, cuando a no es mayor que b, y c es mayor que b', () => {
        expect(gabrielMaxOfThree(5,7,9)).toBe(9);
    });
});