import React from 'react';

export class List extends React.Component {

    render () {
        const {title} = this.props;
        return(
            <div>
                <h2>
                    { title }
                </h2>
                <div>
                    This is List
                </div>
            </div>
        )

    }

}