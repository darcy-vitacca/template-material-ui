import React, { useState } from 'react';
import { Footer } from '../../../shared/footer';
import { Button } from '../../../shared/formElements/button';
import { Header } from '../../../shared/header';
import * as Yup from 'yup';
import {
  Form,
  FormContainer,
  FormSectionContainer,
  PageLayoutContainer,
  SectionContainer,
  ImageSplitFormSection,
  ButtonGroupContainer,
} from '../../../shared/Layout.styles';
import { Markdown } from '../../../shared/markdown';
import cardFront from '../../../images/cardFront.png';
import { balanceConstants } from '../../../utils/constants/balance';
import { useHistory } from 'react-router';
import { activateCardConstants } from '../../../utils/constants/activate';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../../shared/formElements/input';
import { BalanceTable } from './sections/BalanceTable';
import axios from 'axios';

const { activationCode } = activateCardConstants.validations;

export const Balance = () => {
  const [showBalance, setShowBalance] = useState(false);
  const {
    heading,
    subHeading,
    balanceText,
    balanceButtonText,
    defaultValue,
  } = balanceConstants;

  const { push } = useHistory();
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    shouldFocusError: false,
    defaultValues: {
      activationCode: '',
    },
  });

  const onSubmit = async (formData: any) => {
    try {
      const data = {
        cardNumber: 'VLF8023QB',
      };
      console.log('submitted');
      console.log(formData);
      const res = await axios.post('/CardTransactions', data);

      console.log('res', res);

      // console.log('formData', formData);
      // console.log('submitted');
      // setShowBalance(!showBalance);
      // push('/success');
    } catch (err) {
      console.log('err', err);
    }
  };
  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <>
      <Header />
      <PageLayoutContainer>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <SectionContainer>
              <Markdown children={heading} />
              <Markdown children={subHeading} className="balanceText" />

              <FormContainer>
                {showBalance ? (
                  <BalanceTable />
                ) : (
                  <>
                    <FormSectionContainer className="balanceSection">
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
                      <Markdown children={balanceText} className="subText" />
                      <ButtonGroupContainer>
                        <Button
                          onClick={() => methods.handleSubmit(onSubmit)}
                          children={balanceButtonText}
                        />
                      </ButtonGroupContainer>
                    </FormSectionContainer>
                    <FormSectionContainer>
                      <ImageSplitFormSection src={cardFront} />
                    </FormSectionContainer>
                  </>
                )}
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
});
