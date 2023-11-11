import React from 'react'

interface WeekObj {
  week: number,
  word: string,
  link: string
}

const WordTable= () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Veke</th>
          <th>Ord</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Coming</td>
          <td>Coming</td>
          <td>Coming</td>
        </tr>
      </tbody>
    </table>
  )
}

export default WordTable;
