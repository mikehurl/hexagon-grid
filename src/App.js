import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  margin: 10em 0;
  width: 50vw;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
`

const Hexagon = styled.div`
  background: cadetblue;
  width: 17vw; 
  height: 15vw;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  margin-right: 8vw;
  color: #ffffff;
  overflow: hidden;
  transition: background ease 0.35s, transform cubic-bezier(.61, .01, .29, 1.86) 0.35s;

  :nth-child(2n) {
    margin: -8vw -4vw 0 -12vw;
  }

  ::before {
    content: '';
    float: left;
    width: 25%;
    height: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 0% 50%, 100% 100%, 0% 100%);
    shape-outside: polygon(0% 0%, 100% 0%, 0% 50%, 100% 100%, 0% 100%);
  }

  :hover {
    transform: scale(1.1);
		transform-origin: 50%;
  }
`

const InnerWrapper = styled.div`
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	max-width: 50%;
	height: 100%;
	line-height: 1;
	color: #ffffff;
  text-align: center;
  font-size: 50%;

  @media only screen and (min-width: 415px) {
    font-size: 75%;
  }
  @media only screen and (min-width: 768px) {
    font-size: 100%;
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Hexagon>
            <InnerWrapper>
              <h3>Book</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Online Course</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Article</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Mentor</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Course</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Book</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Online Course</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Article</h3>
            </InnerWrapper>
          </Hexagon>
          <Hexagon>
            <InnerWrapper>
              <h3>Mentor</h3>
            </InnerWrapper>
          </Hexagon>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;