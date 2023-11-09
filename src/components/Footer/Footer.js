import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Gmail</LinkTitle>
        <LinkItem href="gmail.com">bkholmahmadov@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning one language at a time </Slogan>
        </CompanyContainer>
        
        <SocialContainer>
        <SocialIcons href="https://github.com/BehzodjoniKholmahmadzoda"><AiFillGithub size='3rem'/></SocialIcons>
        <SocialIcons href="https://linkedin.com/BehzodjoniKholmahmadzoda"><AiFillLinkedin size='3rem'/></SocialIcons>
        <SocialIcons href="https://instagram.com/behzodkholmahmadov"><AiFillInstagram size='3rem'/></SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
