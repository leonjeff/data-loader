
const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "licensePlate", headerName: "Patente", width: 130 },
    { field: "make", headerName: "Marca", width: 130 },
    { field: "model", headerName: "Modelo", width: 130 },
    { field: "yearOfManufacture", headerName: "Año", width: 130 },
  ];
  
  const rows = [
    {id: '1', licensePlate: "Lannister", make: "Cersei", model: 'Toyota',yearOfManufacture: 42 },
    {id: '2', licensePlate: "Lannister", make: "Jaime", model: 'Toyota',yearOfManufacture: 45 },
    {id: '3', licensePlate: "Stark", make: "Arya", model: 'Toyota',yearOfManufacture: 16 },
    {id: '4', licensePlate: "Targaryen", make: "Daenerys", model: 'Toyota',yearOfManufacture: 12 },
    {id: '5', licensePlate: "Melisandre", make: null, model: 'Toyota',yearOfManufacture: 150 },
    {id: '6', licensePlate: "Clifford", make: "Ferrara", model: 'Toyota',yearOfManufacture: 44 },
    {id: '7', licensePlate: "Frances", make: "Rossini", model: 'Toyota',yearOfManufacture: 36 },
    {id: '8', licensePlate: "Roxie", make: "Harvey", model: 'Toyota',yearOfManufacture: 65 },
  ];

  export {columns, rows};