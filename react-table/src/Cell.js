import { useState } from 'react';

function Cell ({ row, label, updateTable }) {

  const [cell, setCell] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setCell(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTable(row, label, cell);
  }

  return (
    <td>    
      <form onSubmit={(e) => handleSubmit(e) }>
        <label>
          {label}
          <input type="submit" value={cell} onChange={(e) => handleChange(e) }>
          </input>
        </label>
      </form>
    </td>
  )
}

export default Cell;