import { retornaArreglo } from "../../base/07-deses-arr";

describe('Probando 07-deses-arr',()=>{
    test('debe de retornar un string y un numero',()=>{
        const [cadena,numero] = retornaArreglo();
        expect(cadena).toBe('ABC');
        // expect(typeof cadena).toBe('string')
        expect(numero).toBe(123);
        // expect(typeof numero).toBe('number')
    });
});