import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: cadetblue;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  margin-right: 8vw;
  color: #ffffff;
  cursor: pointer;
  height: 15vw;
  overflow: hidden;
  transition: background ease 0.35s, transform cubic-bezier(.61, .01, .29, 1.86) 0.35s;
  width: 17vw; 

  :nth-child(2n) {
    margin: -8vw -4vw 0 -12vw;
  }

  ::before {
    clip-path: polygon(0% 0%, 100% 0%, 0% 50%, 100% 100%, 0% 100%);
    content: '';
    float: left;
    height: 100%;
    shape-outside: polygon(0% 0%, 100% 0%, 0% 50%, 100% 100%, 0% 100%);
    width: 25%;
  }

  :hover {
    transform: scale(1.1);
		transform-origin: 50%;
  }
`

const InnerWrapper = styled.div`
  color: #e9e9e7;
  display: flex;
	flex-direction: column;
  flex-wrap: nowrap;
  font-size: 50%;
  height: 100%;
  justify-content: center;
  line-height: 1;
	max-width: 50%;
  text-align: center;
  
  @media only screen and (min-width: 415px) {
    font-size: 75%;
  }
  
  @media only screen and (min-width: 768px) {
    font-size: 100%;
  }
`

const Hexagon = ({ type }) => (
  <Wrapper>
    <InnerWrapper>
      <h3>{type}</h3>
    </InnerWrapper>
  </Wrapper>
)

export default Hexagon