import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  font-size: 25px !important;
  @media (max-width: 700px) {
    font-size: 2px !important;
  }
`;
