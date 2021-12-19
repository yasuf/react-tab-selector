import './App.css';

import TabSelector from './TabSelector';

const TABS = [
  {
    title: 'All'
  },
  {
    title: 'Gaming'
  },
  {
    title: 'Computer programming'
  }
]

function App() {
  return (
    <div className="App">
      <TabSelector
        tabs={TABS}
      />
    </div>
  );
}

export default App;
