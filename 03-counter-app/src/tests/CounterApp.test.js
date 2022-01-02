import CounterApp from '../CounterApp';
import {shallow} from 'enzyme';


describe('Probando componente <CounterApp />',()=>{
    test('Debe mostrar correctamente <CounterApp />',()=>{
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe tener el valor 100 por defecto',()=>{
        const wrapper = shallow(<CounterApp value={100} />);
        const valor = parseInt(wrapper.find('h2').text());
        expect(valor).toBe(100);
    });
});