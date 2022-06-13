import styled, { css } from 'styled-components';

export const Modal = {
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
    display: inline-block;
    z-index: 1012;
    position: relative;
    border-radius: 6px;
    user-select: none;
    background: #ffffff;
    border-radius: 40px;
    border: 1px solid black;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    top: 200px;
    left: 200px;
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
