import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import resources from './resources'
import GlobalStyle from './GlobalStyle';
import Hexagon from './Hexagon';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2vw;
	grid-template-columns: repeat(4, 1fr);
  margin: 10rem 0;
  width: 50vw;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.MAX_RESOURCES = 9
    this.MIN_RESOURCES = 3
    this.state = ({ resourcesToDisplay: 0 })
  }

  componentDidMount() {
    const resourcesToDisplay = Math.floor(Math.random() * this.MAX_RESOURCES) + this.MIN_RESOURCES
    this.setState({ resourcesToDisplay })
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          {resources.slice(0, this.state.resourcesToDisplay).map((resource, index) => (
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