const LANGUAGES = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'SCSS',
    'React',
    'Angular'
];

export const getLANGUAGES = () => {
    return new Promise ((resolve) => {
        setTimeout(() => { resolve(LANGUAGES);}, 1000);
    });
};
