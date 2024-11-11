import { describe, expect, it, test } from "vitest";
import { isAmountBounded } from "./isAmountBounded"; 

describe('Pruebas para isAmountBounded', () => {

    // Clase1
    it ('Validar que el número está entre 1 y 1000 (inclusive)', () => {
        expect(isAmountBounded(1)).toBe(true);
        expect(isAmountBounded(33)).toBe(true);
        expect(isAmountBounded(555)).toBe(true);
        expect(isAmountBounded(1000)).toBe(true);
    });

    // Clase 2
    it ('Validar que el número está fuera de rango', () => {
        expect(isAmountBounded(-1)).toBe(false);
        expect(isAmountBounded(2001)).toBe(false);
        expect(isAmountBounded(1931)).toBe(false);
        expect(isAmountBounded(-33)).toBe(false);
    });

});