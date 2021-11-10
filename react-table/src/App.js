import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell.js';

function App() {

  const generateTable = (x, y) => {
    let arr = [];
    for (let i = 1; i <= y; i++) {
      let row = [];
      for (let j = 1; j <= x; j++) {
        row.push('');
      }
      arr.push(row);
    }
    return arr;
  }

  const [table, setTable] = useState(generateTable(10, 10));

  const updateTable = (row, cell, value) => {
    const updated = table;
    updated[row][cell] = value;
    setTable(updated);
  };

  return (
    <div className="App">
      <header className="App-header">React Table</header>
      <table>
        <thead>
          <tr>
            <th>10x10 table</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr>
              {row.map((cell, cellIndex) => (
                <Cell row={rowIndex} label={cellIndex + 1} updateTable={updateTable}/>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
