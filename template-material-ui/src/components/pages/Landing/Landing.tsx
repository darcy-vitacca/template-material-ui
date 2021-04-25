import React from 'react';
import { Footer } from '../../../shared/footer';
import { Header } from '../../../shared/header';
import {
  SectionContainer,
  PageLayoutContainer,
  ButtonGroupContainer,
} from '../../../shared/Layout.styles';
import { Markdown } from '../../../shared/markdown';
import { Button } from '../../../shared/formElements/button';
import { useHistory } from 'react-router';

export const Landing = () => {
  const { push } = useHistory();
  return (
    <>
      <Header />
      <PageLayoutContainer>
        <SectionContainer align="center">
          <Markdown children={'subHeading'} align="center" />
          <ButtonGroupContainer align="center">
            <Button onClick={() => push('/activate')} className="centerLeftBtn">
              {'activateCardButtonText'}
            </Button>
            <Button children={'balanceButtonText'} className="centerRightBtn" />
          </ButtonGroupContainer>
        </SectionContainer>

        <Footer />
      </PageLayoutContainer>
    </>
  );
};
