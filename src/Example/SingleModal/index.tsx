import Modal from '@/lib/Modal';

import * as S from './style';

interface SingleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SingleModal({ isOpen, onClose }: SingleModalProps) {
  return (
    <Modal wrapperId={'example'} isOpen={isOpen} onClose={onClose} customStyle={S.SingleModal}>
      SingleModal
    </Modal>
  );
}
