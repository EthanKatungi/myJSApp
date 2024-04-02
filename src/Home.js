const Home = () => {

    const handleClick = () => {
        return (
            alert('Hello World')
        );
    }
    const handleClickAgain = (name) => {
        return (
            alert('Hello ' + name)
        );
    }
     
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {  //the () => {} is an anonymous function
                handleClickAgain('Ethan')
            }}>Click Again</button>
        </div>
    );
}
 
export default Home;