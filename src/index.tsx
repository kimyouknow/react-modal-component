import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Example from '@/Example';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <StrictMode>
    <Example />
  </StrictMode>,
);
