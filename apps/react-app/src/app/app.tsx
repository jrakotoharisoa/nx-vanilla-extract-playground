import { Button } from '@sunrise/sprinkles-ui-kit';
import { container } from './app.css';
export function App() {
  return (
    <div className={container}>
      <Button size="large">Large button</Button>
      <Button size="large" disabled>
        Large button
      </Button>
      <Button size="large" color="secondary">
        Large secondary button
      </Button>
      <Button color="primary">Medium primary button</Button>
    </div>
  );
}

export default App;
