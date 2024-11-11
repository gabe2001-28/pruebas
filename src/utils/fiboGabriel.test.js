import { describe, expect, it, test } from "vitest";
import { fiboGabriel } from "./fiboGabriel";

describe ('Pruebas para fiboGabriel', () => {

    // Clase 1
    it('Probar que devuleve 0 para la posición 0', () => {
        expect(fiboGabriel(0)).toBe(0);
    });

    // Clase 2
    it('Probar que devuleve 8 para la posición 6', () => {
        expect(fiboGabriel(6)).toBe(8);
    });

    // Clase 3
    it('Probar que devuleve 55 para la posición 10', () => {
        expect(fiboGabriel(10)).toBe(55);
    });


});