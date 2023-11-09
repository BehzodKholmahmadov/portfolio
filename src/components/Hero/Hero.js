import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br/>
      My Personal Profile
    </SectionTitle>
    <SectionText>
      The purpose of this website is showcase skills and technologies which can be used in order to create your desired product
    </SectionText>
    <Button onClick={()=>window.location='https://upwork.com'}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;