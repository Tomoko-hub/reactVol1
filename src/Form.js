import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text:'' }
    }

    submitForm(e) {
        e.preventDeault();
        this.props.onAddLang(this.state.text);
    }

    render () {
        const { text } = this.state;
        return(
            <div>
                <h4>Add new languages</h4>
                <form onSubmit={(e) => this.submitForm(e)}>
                    <div>
                        <input 
                            type="text"
                            value={text}
                            onChange={(e) => this.setState({text:e.target.value})} />
                    </div>
                    <div>
                        <button>ADD</button>
                    </div>
                </form>
            </div>
        )
    }
}