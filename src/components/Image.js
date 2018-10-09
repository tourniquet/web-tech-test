import React from 'react'
import styled from 'styled-components'

const ImageDiv = styled.div`
    max-height: 800px;
    width: 100%;
    background: url(${props => props.src}) no-repeat center};
    background-size: cover;
    flex-grow: 1;

    p {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        color: #ffffff;
        font-size: 1.2em;
    }
`

const Image = props => {
  const msg = (this.props.error === 400 || this.props.error === 500) && <p>There is no image available for this date.</p>

  return (
    <ImageDiv src={this.props.background}>
      {msg}
    </ImageDiv>
  )
}

export default Image
