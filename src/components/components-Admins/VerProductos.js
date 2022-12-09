import React from 'react'
import MaterialTable from "material-table";
const VerProductos = () => {
  return (
    <MaterialTable
      title="Productos Menu Admin"
      columns={[
        { title: 'Empresa', field: 'Empresa' },
        { title: 'Producto', field: 'Producto' },
        { title: 'Compuesto', field: 'Compuesto' },
        { title: 'Precio_Unitario', field: 'Precio_Unitario' },
        { title: 'Precio_Caja', field: 'Precio_Caja', },
        { title: 'Estado', field: 'Estado' },
        { title: 'Imagen', field: 'Imagen' },

        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { Producto: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { Producto: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}        
      options={{
        search: true
      }}
    />
  )
}

export default VerProductos