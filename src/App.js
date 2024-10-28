import './App.css';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import todo from './icons_FEtask/To-do.svg'
import done from './icons_FEtask/Done.svg'
import progress from './icons_FEtask/in-progress.svg'
import cancel from './icons_FEtask/Cancelled.svg'
function App() {
  return (
    <div className='main__container'>
      <Navbar/>
      <div className='sections'>
        <Section title={"To-Do"} title_count={2} title_icon={todo} />
        <Section title={"Done"} title_count={3} title_icon={done} />
        <Section title={"Done"} title_count={3} title_icon={done} />
        <Section title={"Done"} title_count={3} title_icon={done} />
        <Section title={"In Progress"} title_count={1} title_icon={progress} />
        <Section title_icon={cancel} title={"Cancel"} title_count={0} />
        <Section title_icon={cancel} title={"Cancel"} title_count={0} />
        <Section title_icon={cancel} title={"Cancel"} title_count={0} />
      </div>
    </div>
  );
}

export default App;
