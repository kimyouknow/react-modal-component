import { ReactNode } from 'react';
import { CSSProp } from 'styled-components';

import Potal from './Potal';
import * as S from './style';

export interface ModalProps {
  wrapperId: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  customStyle?: {
    overlay: CSSProp;
    content: CSSProp;
    button: CSSProp;
  };
}

export default function Modal({
  wrapperId,
  isOpen,
  onClose,
  children,
  customStyle = S.defaultStyle,
}: ModalProps) {
  const { overlay, content, button } = customStyle;
  if (!isOpen) return null;
  return (
    <Potal wrapperId={wrapperId} isLock={true}>
      <S.Overlay onClick={onClose} customStyle={overlay}>
        <S.Content onClick={event => event.stopPropagation()} customStyle={content}>
          <S.CloseButton onClick={onClose} customStyle={button}>
            &times;
          </S.CloseButton>
          {children}
        </S.Content>
      </S.Overlay>
    </Potal>
  );
}
