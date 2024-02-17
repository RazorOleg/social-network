import { render } from '@testing-library/react';
import SamuraiJSApp from './App';
import { unmountComponentAtNode } from 'react-dom';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SamuraiJSApp />);
  unmountComponentAtNode(div);
});
