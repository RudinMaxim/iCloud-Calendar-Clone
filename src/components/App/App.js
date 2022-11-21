import Calendar from '../Calendar/Calendar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Calendar/>
    </div>
  );
}

export default App;
