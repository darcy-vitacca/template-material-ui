import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { Markdown } from '../../markdown';
import { InputElement, InputContainer } from './Input.styles';

export interface IInputProps {
  name?: string;
  label?: string;
  type?: string;
  validation?: string;
  width?: '25%' | '50%' | '75%' | '100%';
  maxLength?: number;
  fieldName: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ type, label, validation, width, fieldName, maxLength }, ref) => {
    const { setValue } = useFormContext();
    return (
      <InputContainer width={width}>
        <InputElement
          label={label}
          variant="outlined"
          inputProps={{ maxLength: maxLength }}
          type={type}
          error={!!validation}
          inputRef={ref}
          onChange={(e) => {
            setValue(fieldName, e.target.value);
          }}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key) && type === 'tel') {
              e.preventDefault();
            }
          }}
        />

        {validation && (
          <Markdown children={validation} className="validationText" />
        )}
      </InputContainer>
    );
  }
);
export default Input;
