import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react';

import * as S from './style';

interface PopUpProps {
  parentComponent: MutableRefObject<HTMLDivElement>;
  isOpen: boolean;
  onClose: (event: MouseEvent) => void;
  children: ReactNode;
}

export default function PopUp({ parentComponent, children, isOpen, onClose }: PopUpProps) {
  if (!isOpen) return null;
  return <S.Container>{children}</S.Container>;
}
