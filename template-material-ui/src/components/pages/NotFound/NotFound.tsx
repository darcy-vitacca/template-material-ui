import React from 'react';
import { Footer } from '../../../shared/footer';
import { Header } from '../../../shared/header';
import {
  PageLayoutContainer,
  SectionContainer,
} from '../../../shared/Layout.styles';

export const NotFound = () => {
  return (
    <>
      <Header />
      <PageLayoutContainer>
        <SectionContainer></SectionContainer>
        <Footer />
      </PageLayoutContainer>
    </>
  );
};
