import styled from 'styled-components';

export const StudentLoaderContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--primary-color);
color: white;
`;

export const StudentLoaderTitle = styled.h1`
  text-shadow: 1px 1px 1px black;
  font-size: 4em;
`;

export const StudentLoaderSubTitle = styled.p`
  text-shadow: 1px 1px 1px black;
  font-size: 2em;
`;

export const StudentLoaderError = styled.p`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 10;
  color: var(--error-color);
  padding: 1em;
  background-color: white;
  border-radius: 1em;
`;
