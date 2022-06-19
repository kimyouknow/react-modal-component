import { MutableRefObject, useEffect, useRef, useState } from 'react';

import PopUp from '@/Example/PopUp';
import SingleModal from '@/Example/SingleModal';
import { useToggle } from '@/lib';

import * as S from './style';

export default function Example() {
  const parent = useRef() as MutableRefObject<HTMLDivElement>;
  const [isModalOpen, handleOpenModal] = useToggle(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleModalClick = (event: MouseEvent) => {
    for (const element of event.composedPath()) {
      if (element === parent.current) return;
    }
    setIsPopupOpen(false);
  };

  const openPopUp = () => setIsPopupOpen(true);

  useEffect(() => {
    window.addEventListener('click', handleModalClick, true);

    return () => {
      window.removeEventListener('click', handleModalClick, true);
    };
  }, [parent]);

  return (
    <S.Conatiner>
      <div>
        <button onClick={handleOpenModal}>SingleModal</button>
        <SingleModal isOpen={isModalOpen} onClose={handleOpenModal} />
      </div>
      <S.PopUp ref={parent}>
        <button onClick={openPopUp}>1</button>
        <PopUp parentComponent={parent} isOpen={isPopupOpen} onClose={handleModalClick}>
          1
        </PopUp>
      </S.PopUp>
    </S.Conatiner>
  );
}
