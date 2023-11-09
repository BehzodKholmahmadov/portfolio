import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Tech stack</SectionTitle>
    <SectionText>
      I have studied wide range of technologies but i have less experience
    </SectionText>
    <List>
      <ListItem>
        <picture>
        <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React.js <br/>
            Next.js<br/>
            Tailwind CSS<br/>
            Stripe<br/>
            Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
           
            Node <br/> sanity
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiZend size="3rem" /></picture>
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
