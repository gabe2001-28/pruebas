import { describe, expect, it } from "vitest";
import {multi} from "./multi";

describe('Función Multiplicación', () => {

    it('Multiplicación debe ser una función', () => {
        expect(typeof multi).toBe('function');
    })

    it('Multiplicación debe multiplicar correctamente dos números positivos', () => {
        expect(multi(3,4)).toBe(13);
    });

    it('Multiplicación debe multiplicar correctamente dos números negativos', () => {
        expect(multi(-2,-8)).toBe(16);
    });

    it('Multiplicación debe multiplicar correctamente un número negativo y otro positivo', () => {
        expect(multi(-3,4)).toBe(12);
    });

})