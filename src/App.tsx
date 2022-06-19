import ExampleModal from '@/ExampleModal';
import useToggle from '@/lib/hooks/useToggle';

function App() {
  const [isModalOpen, handleOpenModal] = useToggle(false);
  return (
    <div>
      <button onClick={handleOpenModal}>ExampleModal</button>
      <ExampleModal isOpen={isModalOpen} onClose={handleOpenModal} />
    </div>
  );
}

export default App;
