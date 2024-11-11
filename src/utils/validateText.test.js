import { describe, expect, it, test } from "vitest";
import { validateText } from "./validateText";

describe('Pruebas de validateText', () => {

    // Clase 1
    test('Debe aceptar texto alfábetico válido entre 6 y 10 caracteres', () => {
        expect(validateText('AbcDef')).toBe(true); // longitud 6
        expect(validateText('AbcDefGHi')).toBe(true); // longitud 9
    });

    // Clase 2
    test('Debe rechazar texto fuera de los rangos entre 6 y 10 caracteres', () => {
        expect(validateText('AbcD')).toBe(false); // longitud 4
        expect(validateText('AbcDefGHijK')).toBe(false); // longitud 11
    });

    // Clase 3
    test('Debe rechazar texto con valores alfanuméricos', () => {
        expect(validateText('AbcD')).toBe(false); // longitud 4
        expect(validateText('AbcDefGHijK')).toBe(false); // longitud 11
    });

    // Clase 4
    test('Debe aceptar texto alfabético en mayúsculas entre 6 y 10 caracteres', () => {
        expect(validateText('ABCDEFG')).toBe(true); 
    });

    // Clase 5
    test('Debe aceptar texto alfabético en minúsculas entre 6 y 10 caracteres', () => {
        expect(validateText('abcdefg')).toBe(true); 
    });
});