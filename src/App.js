import './App.css';
import LogIn from './components/authentication/logInAuth';
import SidePanel from './components/sidepanel';
import AdvicePage from './components/advicepage';

function App() {
  return (
    <div className="App md:flex">
      <div className='bg-black md:basis-60 md:h-screen'>
          <SidePanel className=''/>
      </div>
        <AdvicePage />

    </div>
  );
}

export default App;
