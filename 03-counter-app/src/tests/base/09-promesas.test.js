import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Pruebas con promises',()=>{
    test('Debe retornar un heroe de forma async',( done )=>{
        const id = 1;
        getHeroeByIdAsync(id).then((heroe)=>{
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });
    test('Debe obtener un error si el heroe no existe',(done)=>{
        const id = 0;
        const msnError = 'No se pudo encontrar el héroe';
        getHeroeByIdAsync(id).catch((error)=>{
            expect(error).toBe(msnError);
            done();
        })
    });
});