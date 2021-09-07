import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from './const/languages';

function App() {
  const [tab, setTab] = useState('List');
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }
    
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
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
      
      <br/ >
    </div>
    
  );
}

export default App;
