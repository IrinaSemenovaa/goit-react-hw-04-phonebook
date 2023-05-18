import { css } from '@emotion/css';

export const inputContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  width: 550px;
  margin: 0 auto;
`;

export const searchInputStyles = css`
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  height: 45px;
  width: 445px;
  padding: 8px;
  text-align: center;
  margin: 0 auto;

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 2px #3498db;
  }
`;