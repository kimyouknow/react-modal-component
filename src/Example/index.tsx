import PopUp from '@/Example/PopUp';
import SingleModal from '@/Example/SingleModal';
import { useToggle, usePopup } from '@/lib';

import * as S from './style';

export default function Example() {
  const [isModalOpen, handleOpenModal] = useToggle(false);

  const [parent, isPopupOpen, openPopUp, handleModalClick] = usePopup(false);

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
