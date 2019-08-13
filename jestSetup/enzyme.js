import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

global.CONTEXT_ROOT = '';

configure({ adapter: new Adapter() });
