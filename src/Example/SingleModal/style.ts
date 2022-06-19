import { css } from 'styled-components';

export const SingleModal = {
  overlay: css`
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    z-index: 1022;
    background-color: 'rgba(255, 255, 255, 0.75)';
  `,
  content: css`
    z-index: 1012;
    position: relative;
    border-radius: 6px;
    background: #ffffff;
    border-radius: 40px;
    border: 1px solid black;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 493px;
    height: 364px;
  `,
  button: css`
    position: absolute;
    right: 10px;
    top: 6px;
    background: transparent;
    border: none;
    font-size: 30px;
  `,
};
