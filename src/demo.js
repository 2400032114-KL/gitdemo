import React from 'react'

export default function Demo({ products }) {
  return (
    <div>
      <table border={1}>
        <tr>
          <th>PID</th>
          <th>PRODUCT NAME</th>
          <th>PRICE</th>
        </tr>

        {products.map((product) => (
          <tr key={product.pid}>
            <td>{product.pid}</td>
            <td>{product.pname}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}