import React from 'react';
import { render, screen } from '@testing-library/react';
import ToolTip from '../../components/ToolTip'

test('renders ToolTip component', () => {
  const props = {
    conClass: "container__install",
    pClass: "tooltip__install",
    text: "Click on the star to install the app on your device",
  }
  render(<ToolTip {...props}> Children </ToolTip>);
  const ToolTipElement = screen.getByTestId('ToolTipComponent');
  expect(ToolTipElement).toBeInTheDocument();
});
