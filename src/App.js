import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Hexagon from './Hexagon';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2vw;
	grid-template-columns: repeat(4, 1fr);
  margin: 10rem 0;
  width: 50vw;
`

const resources = [
  { type: 'Book' },
  { type: 'Online Course' },
  { type: 'Article' },
  { type: 'Mentor' },
  { type: 'Course' },
  { type: 'Book' },
  { type: 'Online Course' },
  { type: 'Article' }
]

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          {resources.map((resource, index) => (
            <Hexagon
              key={index}
              type={resource.type} />
          ))}
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;