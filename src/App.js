import  { useState } from 'react';
import { List } from "./List"

function App() {
  const [description, setDescription] = useState('Before Click');
  const changeDescription = () => {
    setDescription('After Click');
  }
  
  return (
    <div>
      { description }
      <List title="This is list title"/>
      <button onClick={changeDescription}>Button</button>
    </div>
    
  );
}

export default App;
