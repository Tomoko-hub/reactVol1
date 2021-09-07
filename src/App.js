import  { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [tab, setTab] = useState('List');

    
  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>This is a list</li>
          <li onClick={() => setTab('form')}>This is a form</li>
        </ul>
      </header>
      <hr/>
  
      { 
        tab === 'list' ? <List /> : <Form />
      }
      
      <br/ >
    </div>
    
  );
}

export default App;
