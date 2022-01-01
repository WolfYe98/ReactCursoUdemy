import { getUser,getUsuarioActivo } from "../../base/05-funciones";

describe('Prueba de 05-funciones',()=>{
    const userTest = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
    test('getUser() debe retornar un objeto',()=>{
        const user = getUser();
        expect(user).toEqual(userTest);
    });
    test('getUserActivo() debe retornar un objeto',()=>{
        const nombre = 'Bate';
        const usTest = {
            uid: 'ABC567',
            username: nombre
        };
        const us = getUsuarioActivo(nombre);
        expect(us).toEqual(usTest);
    });
});