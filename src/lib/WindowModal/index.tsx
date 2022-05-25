/* eslint-disable @typescript-eslint/no-var-requires */
import { ReactNode } from 'react';

import Potal from './Portal';

const S = require('./style.module.css');

interface Props {
  children: ReactNode;
  show: boolean;
  handleOpenModal: () => void;
}
function WindowModal({ children, show, handleOpenModal }: Props) {
  if (!show) {
    return null;
  }
  return (
    <Potal>
      <div onClick={handleOpenModal}>
        <div onClick={event => event.stopPropagation()}>
          <button onClick={handleOpenModal}>&times;</button>
          {children}
        </div>
      </div>
    </Potal>
  );
}

export default WindowModal;
