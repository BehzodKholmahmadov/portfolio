import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Projects'},
  { number: 1, text: 'Complex Projects', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishment</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
