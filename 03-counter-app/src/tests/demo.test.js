describe('Testeando la demo test',()=>{    
    test('deben ser iguales los strings',()=>{
    
        // 1. Arrange
        const msn = 'Hola mundo';
      
        // 2. estimulo (act)
        const msn2 = 'Hola mundo';
    
        // 3. Assert
        expect(msn).toBe(msn2);
    })
})
