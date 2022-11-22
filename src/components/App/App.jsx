import './App.css'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar';
import Calendar from '../Calendar/Calendar'

function App() { 

  return (
    <div className="App ShadowWrapper">
      {/* <SideBar/>
      <Header/> */}
      <Calendar/>
    </div>
  );
}

export default App;
