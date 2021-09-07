import React from 'react';

const LANGUAGES = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'HTML',
    'CSS',
    'SCSS',
    'React',
    'Angular'
];

export class List extends React.Component {

    render () {
        
        return(
            <div>
                {
                    LANGUAGES.map((lang, index) => {
                        return <div key={index}>{lang}</div>
                    })
                }
            </div>
        )

    }

}