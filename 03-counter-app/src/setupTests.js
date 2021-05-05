// Para usar las pruebas nativas de react
import '@testing-library/jest-dom/extend-expect'

// Para usar Enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));