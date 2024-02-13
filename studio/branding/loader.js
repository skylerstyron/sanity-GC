import React from 'react'
import styled from 'styled-components'

const Loader = ({ text = 'Loading...' }) => {
  return (
    <LoadingScreen>
      <LoadingScreenContent>
        <LoadingScreenIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="280"
            height="200"
            viewBox="0 0 200 200"
          >
            <path d="M54.28,7.52v4.21H18.43v89.84h17.93v-44.92c-3.59,0-5.38-2.53-5.38-7.02v-4.21h12.1c7.39,0,11.2,2.39,11.2,7.02v53.34c0,4.49-3.81,7.02-11.2,7.02H11.7c-7.17,0-11.2-2.53-11.2-7.02V7.52C.5,3.03,4.53.5,11.7.5h31.37c7.39,0,11.2,2.39,11.2,7.02ZM69.96.5h8.96l17.93,47.73V.5h6.72c7.39,0,11.2,2.53,11.2,7.02v98.27c0,4.49-3.81,7.02-11.2,7.02h-6.72l-17.93-70.19v70.19h-6.72c-7.17,0-11.2-2.53-11.2-7.02V7.52c0-4.63,3.14-7.02,8.96-7.02ZM121.5,105.79V7.52c0-4.63,4.03-7.02,11.2-7.02h31.37c7.39,0,11.2,2.53,11.2,7.02v98.27c0,4.49-3.81,7.02-11.2,7.02h-6.72V45.42h-17.93v67.38h-6.72c-7.17,0-11.2-2.53-11.2-7.02ZM139.42,34.19h17.93V11.73h-17.93v22.46ZM193.2.5h31.37c7.17,0,11.2,2.39,11.2,7.02v16c0,3.65-1.57,6.04-5.83,8.7l-12.1,7.58,16.13,65.42c1.12,4.77-2.69,7.58-10.31,7.58h-5.83l-17.93-67.38v67.38h-6.72c-7.17,0-11.2-2.53-11.2-7.02V7.52c0-4.63,4.03-7.02,11.2-7.02ZM199.92,34.19l17.93-11.23v-11.23h-17.93v22.46ZM11.7,117.03h31.37c7.17,0,11.2,1.32,11.2,3.87v4.64c0,2.48-3.81,3.87-11.2,3.87h-6.72v-6.19h-17.93v49.53h17.93v-6.19h6.72c7.39,0,11.2,1.32,11.2,3.87v4.64c0,2.48-3.81,3.87-11.2,3.87H11.7c-7.17,0-11.2-1.39-11.2-3.87v-54.17c0-2.55,4.03-3.87,11.2-3.87ZM72.2,117.03h31.37c7.17,0,11.2,1.32,11.2,3.87v8.82c0,2.01-1.57,3.33-5.83,4.8l-12.1,4.18,16.13,36.07c1.12,2.63-2.69,4.18-10.31,4.18h-5.83l-17.93-37.15v37.15h-6.72c-7.17,0-11.2-1.39-11.2-3.87v-54.17c0-2.55,4.03-3.87,11.2-3.87ZM78.92,135.6l17.93-6.19v-6.19h-17.93v12.38ZM132.7,117.03h31.37c7.17,0,11.2,1.32,11.2,3.87v2.32h-35.85v12.38h26.89v2.32c0,2.48-3.81,3.87-11.2,3.87h-15.69v30.96h35.85v2.32c0,2.48-4.03,3.87-11.2,3.87h-31.37c-7.17,0-11.2-1.39-11.2-3.87v-54.17c0-2.55,3.81-3.87,11.2-3.87ZM226.81,178.94h-8.96l-8.96-6.19-8.96,6.19h-6.72c-7.17,0-11.2-1.39-11.2-3.87v-54.17c0-2.55,4.03-3.87,11.2-3.87h6.72v49.53l8.96-6.19,8.96,6.19v-49.53h6.72c7.39,0,11.2,1.39,11.2,3.87v54.17c0,2.48-3.14,3.87-8.96,3.87Z" />
          </svg>
        </LoadingScreenIcon>
        <p>{text}</p>
      </LoadingScreenContent>
    </LoadingScreen>
  )
}

const LoadingScreen = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000;
  color: #f4f4f0;
`

const LoadingScreenContent = styled.div`
  margin: auto;

  p {
    margin-top: 2rem;
    font-size: 13px;
    font-weight: 600;
  }
`

const LoadingScreenIcon = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 6rem;

  svg {
    display: block;
    width: 100%;
    max-width: none;
    height: auto;
    fill: currentColor;
  }
`

export default Loader
