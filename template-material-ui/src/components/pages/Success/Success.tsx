import React from 'react';
import { Footer } from '../../../shared/footer';
import { Header } from '../../../shared/header';
import {
  Image,
  PageLayoutContainer,
  SectionContainer,
} from '../../../shared/Layout.styles';
import { Markdown } from '../../../shared/markdown';
import cardFront from '../../../images/cardFront.png';
import { successConstants } from '../../../utils/constants/success';

export const Success = () => {
  const { subHeading, successText } = successConstants;
  return (
    <>
      <Header />
      <PageLayoutContainer>
        <SectionContainer align="center">
          <Markdown children={subHeading} align="center" />
          <Markdown
            children={successText}
            align="center"
            className="successText"
          />
          <Image src={cardFront} />
        </SectionContainer>
        <Footer />
      </PageLayoutContainer>
    </>
  );
};
