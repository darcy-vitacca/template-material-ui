import React from 'react';
import { Line } from '../Layout.styles';
import { HeaderLogo } from '../../images/svg';
import { HeaderContainer, BannerContainer, Banner } from './Header.styles';
import { useHistory } from 'react-router-dom';
import bannerImg from '../../images/banner.jpg';

export const Header = () => {
  const { push } = useHistory();
  return (
    <HeaderContainer>
      <BannerContainer>
        <Banner onClick={() => push('/')} src={bannerImg} alt="Banner Image" />
        <HeaderLogo push={push} />
      </BannerContainer>
      <Line />
    </HeaderContainer>
  );
};
