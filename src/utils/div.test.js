import { describe, expect, it} from "vitest";
import { div } from "./div";

describe ('Pruebas para div', () => {

    //Clase 1
    it('La función div es una función', () => {
        expect(typeof div).toBe('function');
    });

    //Clase 2
    it('La divisón de 2 números positivos debe dar número positivo', () => {
        expect(div(24,8)).toBe(3);
    });

    // Clase 3
    it('La divisón de 2 números negativos debe dar número positivo', () => {
        expect(div(-48,-2)).toBe(24);
    });

    // Clase 4
    it('La divisón entre un número positivo y otro negativo debe dar número negativo', () => {
        expect(div(66,-2)).toBe(-33);
    });

});