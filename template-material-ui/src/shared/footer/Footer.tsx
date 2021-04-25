import React from 'react';
import { globalConstants } from '../../utils/constants/global';
import { Line } from '../Layout.styles';
import { Markdown } from '../markdown';
import { FooterLinkSection, FooterLinks } from './Footer.styles';

export const Footer = () => {
  const { footerLinks } = globalConstants;
  return (
    <>
      <Line />
      <FooterLinkSection>
        <FooterLinks>
          <div>
            {footerLinks.map((item, index) => {
              return (
                <div key={item.link}>
                  <Markdown children={item.link} key={item.link} />
                  {footerLinks.length > index + 1 && (
                    <Markdown children={'|'} className="divider" />
                  )}
                </div>
              );
            })}
          </div>
        </FooterLinks>
      </FooterLinkSection>
    </>
  );
};
