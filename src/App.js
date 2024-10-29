import './App.css';
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';

import { useState } from 'react';
function App() {
  const [showUser, setShowUser] = useState(true);
  return (
    <div className='main__container'>
      <Navbar/>
      <div className='sections'>
        <Section type={"todo"} title_count={2} showUser={showUser} />
        <Section type={"done"} title_count={3} showUser={showUser} />
        <Section type={"backlog"} title_count={3} showUser={showUser} />
        <Section type={"progress"} title_count={2} showUser={showUser} />
        <Section type={"cancel"} title_count={0} showUser={showUser} />
      </div>
    </div>
  );
}

export default App;
