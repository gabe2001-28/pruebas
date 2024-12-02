import { describe, expect, test } from "vitest";
import { gabriel } from "./gabriel";

describe ('Pruebas de gabriel', () => {

    //Clase 1
    test('Probar que la función gabriel es una función', () => {
        expect(typeof gabriel).toBe('function');
    });

    //Clase 2
    test('Si la función recibe un número positivo es true', () => {
        expect(gabriel(10)).toBe(true);
    });

    //Clase 3
    test('Si la función recibe un número negativo es false', () => {
        expect(gabriel(-5)).toBe(false);
    });

    //Clase 4
    test('Si la función recibe un 0 es null', () => {
        expect(gabriel(0)).toBeNull();
    });

});