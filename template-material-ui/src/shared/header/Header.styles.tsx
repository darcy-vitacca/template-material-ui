import styled from 'styled-components/macro';
import { device } from '../../styles/devices';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeaderContainer = styled.div`
  padding: 10px;
  @media ${device.mobileLrg} {
    padding: inherit;
  }
`;
export const Banner = styled.img`
  width: 100%;
  display: none;
  @media ${device.mobileLrg} {
    display: block;
  }
`;
export const HeaderLogoSVG = styled.svg`
  cursor: pointer;
  width: 80%;
  max-width: 500px;
  min-width: 200px;
  padding: 20px;
  @media ${device.mobileLrg} {
    display: none;
  }
`;
