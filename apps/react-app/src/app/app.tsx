import { Button } from '@sunrise/sprinkles-ui-kit';
import { useState } from 'react';
import { theme, ugly } from './theme.css';

export function App() {
  const [selectedTheme, setSelectedTheme] = useState(theme);
  return (
    <>
      <div className="mb-2">
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value={'default'}>Comet theme</option>
          <option value={'ugly'}>Ugly theme</option>
        </select>
      </div>
      <div data-theme={selectedTheme} className="space-x-2">
        <Button size="large">Large button</Button>
        <Button size="large" disabled>
          Large button
        </Button>
        <Button size="large" color="secondary">
          Large secondary button
        </Button>
        <Button color="primary">Medium primary button</Button>
      </div>
    </>
  );
}

export default App;
