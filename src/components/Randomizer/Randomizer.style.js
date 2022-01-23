import styled from 'styled-components';

export const RandomizerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RandomizerHeader = styled.div`
  user-select: none;
  height: 20vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--primary-color);
`;

export const RandomizerButtons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const RandomizerRoundedButton = styled.div`
  background-color: white;
  border-radius: 3em;
  padding: 10px;
  cursor: pointer;
  display: flex;
`;

export const RandomizerCountButtons = styled(RandomizerRoundedButton)`
  display: flex;
  align-items: center;
  & div:nth-child(1), & div:nth-child(3) {
    cursor: pointer;
    margin: 0 5px;
  }
  & div:nth-child(2) {
    font-weight: bold;
    margin: 0 5px;
  }
`;

export const RandomizerBinButton = styled(RandomizerRoundedButton)`
  position: absolute;
  right: 2em;
`;

export const RandomizerResult = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  overflow: scroll;
  `;
  
export const RandomizerResultCard = styled.div`
  margin: 2em;
  box-shadow: 0 1em 1em 0 rgb(0 0 0 / 10%);
  border-radius: 0 0 0.5em 0.5em;
  width: 300px;
`;

export const RandomizerResultCardHeader = styled.h2`
  background-color: var(--primary-color);
  border-radius: 0.3em 0.3em 0 0;
  padding: 1em 2em;
  color: white;
  margin: 0;
`;
