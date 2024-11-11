import { describe, expect, it, test } from "vitest";
import { isApproved } from "./isApproved";

describe('Pruebas de isApproved', () => {

    //Clase 1
    test('Debe devolver true para notas entre 5 y 10 (inclusive)', () => {
        expect(isApproved(5)).toBe(true);
        expect(isApproved(7.5)).toBe(true);
        expect(isApproved(10)).toBe(true);
    });

    //Clase 2
    test('Debe devolver false para notas entre 0 y 4.99', () => {
        expect(isApproved(0)).toBe(false);
        expect(isApproved(2.5)).toBe(false);
        expect(isApproved(4.99)).toBe(false);
    });

    //Clase 3
    test('Debe devolver null para notas fuera de rango (menores a 0 o mayores a 10)', () => {
        expect(isApproved(-1)).toBeNull();
        expect(isApproved(11)).toBeNull();
        expect(isApproved(15)).toBeNull();
    });

    
});