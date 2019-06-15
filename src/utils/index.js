const words = ['shark', 'hello', 'horse', 'animal'];


export default () => {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}