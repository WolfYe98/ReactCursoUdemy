import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('02-template-string pruebas',()=>{
    test('getSaludo(nombre) debe retornar Hola Bate', ()=>{
        const nombre = 'Bate';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre);
    });

    test('getSaludo() debe retornar Hola Carlos! si no recibe args',()=>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    });
});