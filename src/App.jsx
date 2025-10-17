import React from "react";

const cars = [
  { id: 1, name: "Swift", company: "Maruti Suzuki" },
  { id: 2, name: "City", company: "Honda" },
  { id: 3, name: "Fortuner", company: "Toyota" },
  { id: 4, name: "i20", company: "Hyundai" },
  { id: 5, name: "Thar", company: "Mahindra" },
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
        }}
      >
        <thead>
  <tr style={{ backgroundColor: "#e0e0e0" }}>
    <th style={{ border: "1px solid #999", padding: "8px" }}>ID</th>
    <th style={{ border: "1px solid #999", padding: "8px" }}>Car Name</th>
    <th style={{ border: "1px solid #999", padding: "8px" }}>Company</th>
  </tr>
</thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                {car.id}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{car.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{car.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
