import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  background: ${props => {
    if (props.type === 'Book') {
      return '#3183c8'
    }
    if (props.type === 'Online Course') {
      return '#b8c4ce'
    }
    if (props.type === 'Article') {
      return '#38c172'
    }
    if (props.type === 'Mentor') {
      return '#f4ca64'
    }
    // type === 'Course
    return '#dc3030'
  }};
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

  :disabled {
    opacity: 0.5;
  }

  :hover:not(:disabled) {
    background: ${props => {
    if (props.type === 'Book') {
      return '#2368a2'
    }
    if (props.type === 'Online Course') {
      return '#8895a7'
    }
    if (props.type === 'Article') {
      return '#259d58'
    }
    if (props.type === 'Mentor') {
      return '#caa53d'
    }
    // type === 'Course
    return '#b82020'
  }};
    transform: scale(1.1);
		transform-origin: 50%;
  }
`

const InnerWrapper = styled.div`
  color: #212934;
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

class Hexagon extends Component {
  constructor(props) {
    super(props)
    this.state = { isCompleted: false }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ isCompleted: true })
  }

  render() {
    const { isCompleted } = this.state
    const { type } = this.props
    return (
      <Wrapper disabled={isCompleted} onClick={this.onClick} type={type}>
        <InnerWrapper>
          <h3>{type}</h3>
        </InnerWrapper>
      </Wrapper>
    )
  }
}

export default Hexagon