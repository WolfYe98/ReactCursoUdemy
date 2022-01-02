import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme';
describe('Probando el componente <PrimeraApp />',()=>{
    // Extension de testing-library/jest-dom
    // test('debe de mostrar el mensaje "Hola soy Goku"',()=>{
    //     const saludo = 'Hola soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo='Goku'/>)
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    //Enzyme (la mejor forma)
    test('debe mostrar <PrimeraApp /> correctamente',()=>{
        const wrapper = shallow(<PrimeraApp saludo='Goku!' />);
        expect(wrapper).toMatchSnapshot();
    });
    test('debe mostrar un subtitulo',()=>{
        const wrapper = shallow(<PrimeraApp saludo='Goku' subtitulo='mi subtitle' />);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe('mi subtitle');
    })
});