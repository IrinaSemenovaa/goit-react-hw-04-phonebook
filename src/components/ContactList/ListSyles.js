import { css } from '@emotion/css';

export const listWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  min-height: 18vh;
`;

export const listStyles = css`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 445px;
`;

export const itemStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
`;

export const btnDeleteStyles = css`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff6659;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const nameStyles = css`
  grid-column: 1 / 2;
  font-size: 14px;
`;

export const numberStyles = css`
  grid-column: 2 / 3;
  font-size: 14px;
`;

