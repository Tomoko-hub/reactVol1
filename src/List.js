const LANGUAGES = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'SCSS',
    'React',
    'Angular'
]
export const List = () => {
    
    return(
        <div>
            { 
                LANGUAGES.map((lang, index) => {
                    return<div key = { index }>{ lang }</div>
                })
            }
        </div>
    )

}

    