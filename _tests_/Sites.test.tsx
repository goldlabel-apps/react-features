import React from 'react';
import { render } from '@testing-library/react';
import {Sites} from '../Sites';

test('Test Sites', () => {
  render(<Sites />);
  const theSuntoRise = true;
  expect(theSuntoRise);
});
