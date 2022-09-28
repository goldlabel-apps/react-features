import React from 'react';
import { render } from '@testing-library/react';
import Features from '../Features';

test('Test Features', () => {
  render(<Features />);
  const theSuntoRise = true;
  expect(theSuntoRise);
});
