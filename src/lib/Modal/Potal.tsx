import { ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// TODO: 일단 가장 넓은 범위의 ReactNode 타입 사용 (추가 공부 필요)
export interface PortalProps {
  children: ReactNode;
  wrapperId: string;
  isLock: boolean;
}

export default function Potal({ children, wrapperId, isLock }: PortalProps) {
  const [potalWrapper, setPotalWrapper] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!isLock) return;

    // 화면 스크롤 방지
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      // 스크롤 방지 해제
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: "";  top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  useLayoutEffect(() => {
    const { isCreated, wrapper } = getRootElementById(wrapperId);
    setPotalWrapper(wrapper);
    return () => {
      if (isCreated) {
        removeElement(wrapper);
      }
    };
  }, [wrapperId]);

  if (!potalWrapper) return null;

  return createPortal(children, potalWrapper);
}

const removeElement = (wrapper: HTMLElement) => {
  wrapper.parentNode?.removeChild(wrapper);
};

const getRootElementById = (documentId: string) => {
  let wrapper = document.getElementById(documentId);
  let isCreated = false;
  if (!wrapper) {
    wrapper = createWrapperAndAppendToBody(documentId);
    isCreated = true;
  }
  return { isCreated, wrapper };
};

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};
