import CounterApp from '../CounterApp';
import {shallow} from 'enzyme';


describe('Probando componente <CounterApp />',()=>{
    let wrapper = shallow(<CounterApp />);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar correctamente <CounterApp />',()=>{
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe tener el valor 100 por defecto',()=>{
        const wrapper = shallow(<CounterApp value={100} />);
        const valor = parseInt(wrapper.find('h2').text().trim());
        expect(valor).toBe(100);
    });
    test('Debe incrementar el valor cuando cliqueamos en el boton +1',()=>{
        wrapper.find('button').at(0).simulate('click');
        const valor = wrapper.find('h2').text().trim();
        expect(valor).toBe('11');
    });
    test('Debe resetear el valor cuando cliqueamos en el boton reset',()=>{
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valor = wrapper.find('h2').text().trim();
        expect(valor).toBe('10');
    });
    test('Debe restar el valor cuando cliqueamos en el boton -1',()=>{
        wrapper.find('button').at(2).simulate('click');
        const valor = wrapper.find('h2').text().trim();
        expect(valor).toBe('9');
    });
});