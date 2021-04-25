import React from 'react';
import { useHistory } from 'react-router';
import { Footer } from '../../../shared/footer';
import { Button } from '../../../shared/formElements/button';
import { Header } from '../../../shared/header';
import * as Yup from 'yup';
import {
  Form,
  FormContainer,
  FormSectionContainer,
  ButtonGroupContainer,
  ImageSplitFormSection,
  PageLayoutContainer,
  SectionContainer,
} from '../../../shared/Layout.styles';
import { Markdown } from '../../../shared/markdown';
import cardFront from '../../../images/cardFront.png';
import { activateCardConstants } from '../../../utils/constants/activate';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ActivateCardInputs } from './sections/ActivateCardInputs';
import axios from 'axios';
const {
  activationCode,
  email,
  firstName,
  lastName,
  phoneNumber,
  termsConditionsCheck,
} = activateCardConstants.validations;

export const ActivateCard = () => {
  const {
    heading,
    subHeading,
    activateCardText,
    activateCardButtonText,
  } = activateCardConstants;

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    shouldFocusError: false,
    defaultValues: {
      activationCode: '',
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      termsConditionsCheck: false,
    },
  });

  const onSubmit = async (formData: any) => {
    console.log('formData', formData);
    try {
      const data = {
        fname: 'Anthony',
        lname: 'Chenery',
        eaid: 'VLF8023QB',
      };
      console.log('submitted');
      const res = await axios.post('/ActivateCard', data);
      console.log('res', res);
      push('/success');
    } catch (err) {
      console.log('err', err);
    }
  };

  const { push } = useHistory();

  return (
    <>
      <Header />
      <PageLayoutContainer>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <SectionContainer>
              <Markdown children={heading} />
              <Markdown children={subHeading} />
              <Markdown children={activateCardText} />
              <FormContainer>
                <FormSectionContainer className="activateCardSection">
                  <ActivateCardInputs />
                  <ButtonGroupContainer>
                    <Button
                      onClick={() => methods.handleSubmit(onSubmit)}
                      children={activateCardButtonText}
                    />
                  </ButtonGroupContainer>
                </FormSectionContainer>
                <FormSectionContainer>
                  <ImageSplitFormSection src={cardFront} />
                </FormSectionContainer>
              </FormContainer>
            </SectionContainer>
            <Footer />
          </Form>
        </FormProvider>
      </PageLayoutContainer>
    </>
  );
};
const validationSchema = Yup.object().shape({
  activationCode: Yup.string()
    .required(activationCode.required)
    .matches(/^[a-zA-Z0-9_.-]*$/, {
      message: activationCode.format,
      excludeEmptyString: true,
    }),
  firstName: Yup.string()
    .required(firstName.required)
    .matches(/^([A-Za-z\s\-'".])*$/, {
      message: firstName.format,
      excludeEmptyString: true,
    }),
  lastName: Yup.string()
    .required(lastName.required)
    .matches(/^([A-Za-z\s\-'".])*$/, {
      message: lastName.format,
      excludeEmptyString: true,
    }),
  email: Yup.string().email(email.format).required(email.required),
  phoneNumber: Yup.string()
    .required(phoneNumber.required)
    .matches(/^(0)[0-9]+$/, {
      message: phoneNumber.format,
      excludeEmptyString: true,
    }),
  termsConditionsCheck: Yup.bool().oneOf([true], termsConditionsCheck.required),
});
