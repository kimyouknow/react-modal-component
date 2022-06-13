import Modal, { ModalProps } from '@/lib/Modal';

interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExampleModal({ isOpen, onClose }: ExampleModalProps) {
  return (
    <Modal wrapperId={'example'} isOpen={isOpen} onClose={onClose}>
      ExampleModal
    </Modal>
  );
}
