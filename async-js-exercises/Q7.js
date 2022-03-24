/* 

- **.2** Create a list in React. Use array of objects. Use map to render the list
    - On every list there should be an onClick handler. Clicking on this should print the details of the object.

*/

const obj = [
  { name: "1", id: 1 },
  { name: "2", id: 2 },
  { name: "3", id: 3 },
  { name: "4", id: 4 },
];

export default function App() {
  return (
    <div className="App">
      {obj.map((item, i) => (
        <ul>
          <li key={i} onClick={() => console.log(item)}>
            {" "}
            {item.name}{" "}
          </li>
        </ul>
      ))}
    </div>
  );
}
