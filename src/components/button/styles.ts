import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  border: 0;
  border-radius: 10px;
  background: #ff9000;
  height: 56px;
  /* padding: 0 16px; */
  color: #312e38;
  width: 100%;
  font-weight: 650;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')}
  }
`