import Header from '../Header/Header'
import Calendar from '../Calendar/Calendar'
import moment from 'moment'
import SideBar from '../SideBar/SideBar';

function App() {
  // изменение на европейскую систему дней
  moment.updateLocale('en', {week: {dow:1}})
  // определение начал месяца и конца
  const startDay = moment().startOf('month').startOf('week');
  // const endDay = moment().endOf('month').endOf('week');   

  return (
    <div className="App">
      {/* <SideBar/> */}
      {/* <Header/> */}
      <Calendar startDay={startDay}/>
    </div>
  );
}

export default App;
