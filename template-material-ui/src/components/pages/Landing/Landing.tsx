import React from 'react';
import { Footer } from '../../../shared/footer';
import { Header } from '../../../shared/header';
import {
  SectionContainer,
  PageLayoutContainer,
  ButtonGroupContainer,
  Image,
} from '../../../shared/Layout.styles';
import { Markdown } from '../../../shared/markdown';
import { landingConstants } from '../../../utils/constants/landing';
import cardFront from '../../../images/cardFront.png';
import { Button } from '../../../shared/formElements/button';
import { useHistory } from 'react-router';

export const Landing = () => {
  const {
    subHeading,
    activateCardButtonText,
    balanceButtonText,
  } = landingConstants;

  const { push } = useHistory();
  return (
    <>
      <Header />
      <PageLayoutContainer>
        <SectionContainer align="center">
          <Markdown children={subHeading} align="center" />
          <Image src={cardFront} />
          <ButtonGroupContainer align="center">
            <Button onClick={() => push('/activate')} className="centerLeftBtn">
              {activateCardButtonText}
            </Button>
            <Button
              onClick={() => push('/balance')}
              children={balanceButtonText}
              className="centerRightBtn"
            />
          </ButtonGroupContainer>
        </SectionContainer>

        <Footer />
      </PageLayoutContainer>
    </>
  );
};
