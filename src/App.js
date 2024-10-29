import './App.css';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import SectionMain from './components/section/SectionMain';

function App() {
  const [group, setGroup] = useState('status');
  const [order, setOrder] = useState('priority');
  return (
    <div className='main__container'>
      <Navbar group={group} setGroup={setGroup} order={order} setOrder={setOrder} />
      <SectionMain group={group}/>
    </div>
  );
}

export default App;
