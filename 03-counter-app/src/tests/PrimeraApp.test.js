import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';

describe('Probando el componente <PrimeraApp />',()=>{
    test('debe de mostrar el mensaje "Hola soy Goku"',()=>{
        const saludo = 'Hola soy Goku';
        const {getByText} = render(<PrimeraApp saludo='Goku'/>)
        expect(getByText(saludo)).toBeInTheDocument();
    });
});