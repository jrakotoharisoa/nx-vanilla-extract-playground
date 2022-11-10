import { Button, sprinkles } from '@sunrise/sprinkles-ui-kit';
import { useState } from 'react';
import * as styles from './app.css';
import { theme, ugly } from './theme.css';

export function App() {
  const [selectedTheme, setSelectedTheme] = useState(theme);
  return (
    <>
      <div className={sprinkles({ marginBottom: 'medium' })}>
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value={theme}>Comet theme</option>
          <option value={ugly}>Ugly theme</option>
        </select>
      </div>
      <div className={[selectedTheme, styles.container].join(' ')}>
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
