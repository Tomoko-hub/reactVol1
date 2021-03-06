import { useEffect } from 'react';

export const List = ({ langs }) => {

    useEffect(() => {
        console.log('List.js:useEffect');

        return () => {
            console.log('List.js:useEffectUnmount');
        }
    }) 
    
    return(
        <div>
            { 
                langs.map((lang, index) => {
                    return<div key = { index }>{ lang }</div>
                })
            }
        </div>
    )

};

    