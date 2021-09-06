import  React from 'react';
import { List } from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: "Before click"}
  }

  changeDescription() {
    this.setState({
      description:"After Click"
    })
  }

  render () {
    const { description } = this.state;
    return (
      <div>
        <h4>
        Hello! I'm in the appComponent
        </h4>
        { description }
        <List title="This is a title in the appComponent" />
        <button onClick={() => this.changeDescription()}>
        Button
        </button>
      </div>
    )
  }
}


export default App;
