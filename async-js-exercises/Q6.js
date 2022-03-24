/* 
## h/w ex7: onClick in React

### challenge

- **7.1** Create a button in React and print the event
    - Can you print the button text from this event?
*/

export default function App() {
  const handleChange = (e) => {
    console.log(e.target.innerText);
  };

  const handleChangeForLoggingTheEvent = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <button onClick={handleChange}>click me</button>
      <button onClick={handleChangeForLoggingTheEvent}>
        click me to log the event
      </button>
    </div>
  );
}
