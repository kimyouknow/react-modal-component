import Modal from '@/lib/Modal';

import * as S from './style';

interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExampleModal({ isOpen, onClose }: ExampleModalProps) {
  return (
    <Modal wrapperId={'example'} isOpen={isOpen} onClose={onClose} customStyle={S.Modal}>
      ExampleModal
    </Modal>
  );
}
