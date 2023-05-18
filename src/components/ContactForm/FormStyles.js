import { css } from '@emotion/css';

export const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 550px;
`;

export const formStyles = css`
  display: flex;
  width: 375px;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const labelStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  width: 315px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const inputStyles = css`
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 8px;
  font-size: 14px;
  margin: 15px 0 15px 0;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const buttonStyles = css`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto;
  &:hover {
    background-color: #0062cc;
  }

  &:active {
    background-color: #005cbf;
  }
`;
