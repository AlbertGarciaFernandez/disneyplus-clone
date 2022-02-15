import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
          <img src="https://pbs.twimg.com/media/FEAaf8QVEAIUGgd?format=jpg&name=large" />
        </Background>
        <ImageTitle>
          <img src="https://pngset.com/images/x-485-zootopia-logo-word-alphabet-text-label-transparent-png-1075370.png" />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>

          </AddButton>
          <GroupWatchButton>

          </GroupWatchButton>
        </Controls>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc (100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
    height= 30vh;
    min-height: 170px;
    width: 35vh;
    min-width: 200px;


    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
`

const Controls = styled.div`

`
const PlayButton = styled.div`
`

const TrailerButton = styled.div`
`

const AddButton = styled.div`
`

const GroupWatchButton = styled.div`
`
