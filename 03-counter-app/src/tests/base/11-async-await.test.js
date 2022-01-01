import { getImagen } from "../../base/11-async-await";

describe('Pruebas 11-async-await',()=>{
    test('Debe retornar la url con el gift',async ()=>{
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});