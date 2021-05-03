import './App.css';
import ColorFilters from './components/filters/ColorFilters';
import ComponentFilter from './components/filters/ComponentFilter';

function App() {
  return (
    <div className="App">
      <ComponentFilter />
      <ColorFilters/>
    </div>
  );
}

export default App;
