import React from 'react';
import {
  activateCardConstants,
  phoneMaxLength,
} from '../../../../utils/constants/activate';
import { Markdown } from '../../../../shared/markdown';
import { Controller, useFormContext } from 'react-hook-form';
import { CheckboxElement } from '../../../../shared/formElements/checkbox';
import Input from '../../../../shared/formElements/input';

export const ActivateCardInputs = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    activationCodeSubText,
    termsConditionsText,
    defaultValue,
  } = activateCardConstants;

  return (
    <>
      <Controller
        render={(props) => (
          <Input
            {...props}
            type="text"
            label="Claim Activation Code*"
            fieldName="activationCode"
            validation={errors?.activationCode?.message}
            width="100%"
          />
        )}
        name="activationCode"
        control={control}
        defaultValue={defaultValue.activationCode || ''}
      />
      <Markdown children={activationCodeSubText} className="subText" />
      <Controller
        render={(props) => (
          <Input
            {...props}
            type="email"
            label="Email Address*"
            fieldName="email"
            validation={errors?.email?.message}
            width="100%"
          />
        )}
        name="email"
        control={control}
        defaultValue={defaultValue.email || ''}
      />
      <Controller
        render={(props) => (
          <Input
            {...props}
            type="text"
            label="First Name*"
            fieldName="firstName"
            validation={errors?.firstName?.message}
            width="100%"
          />
        )}
        name="firstName"
        control={control}
        defaultValue={defaultValue.firstName || ''}
      />
      <Controller
        render={(props) => (
          <Input
            {...props}
            type="text"
            label="Last Name*"
            fieldName="lastName"
            validation={errors?.lastName?.message}
            width="100%"
          />
        )}
        name="lastName"
        control={control}
        defaultValue={defaultValue.lastName || ''}
      />
      <Controller
        render={(props) => (
          <Input
            {...props}
            type="tel"
            label="Phone Number*"
            fieldName="phoneNumber"
            maxLength={phoneMaxLength}
            validation={errors?.phoneNumber?.message}
            width="100%"
          />
        )}
        name="phoneNumber"
        control={control}
        defaultValue={defaultValue.phoneNumber || ''}
      />
      <CheckboxElement
        name="termsConditionsCheck"
        label={termsConditionsText}
        className="termsConditionsText"
        control={control}
        validation={errors?.termsConditionsCheck?.message}
      />
    </>
  );
};
