import { getHeroeById,getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';
describe('Probando 08-imp-exp.js',()=>{
    test('getHeroeById(1) debe retornar un objeto',()=>{
        const id = 1;
        
        const heroe = getHeroeById(id);
        const heroeTest = heroes.find(her=>her.id==id);
        
        expect(heroe).toEqual(heroeTest);
    });
    test('getHeroesByOwner(DC) debe devolver un array de heroes de DC',()=>{
        const ow = 'DC';
        
        const heroe = getHeroesByOwner(ow);
        const heroeTest = heroes.filter(her=>her.owner==ow);
        
        expect(heroe).toEqual(heroeTest);
    });
});