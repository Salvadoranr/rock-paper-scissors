import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../../components/Input'

test('renders Input component', () => {
  const props = {
    conClass:"input_container u-mt-1-5",
    iType:"text",
    iClass:"input_text",
    inputId:"floatingInput",
    placeholder:"name",
    autoComplete:"off",
    handleChange:()=>{},
    labelClass:"input_label",
    text:"Name",
    sClass:"",
    sText:"*"
  }
  render(<Input {...props} />);
  const InputElement = screen.getByTestId('InputComponent');
  expect(InputElement).toBeInTheDocument();
});
