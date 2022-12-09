import React from 'react'
import MaterialTable from "material-table";
const VerClientes= () => {
  return (
    <MaterialTable
      title="CLIENTES MENU ADMIN"
      columns={[
        { title: 'Nombre', field: 'Nombre' },
        { title: 'Apellidos', field: 'Apellidos' },
        { title: 'Correo', field: 'Password' },
        { title: 'Ruc', field: 'Ruc' },
        { title: 'Domicilio', field: 'Domicilio', },
        { title: 'NumeroTelefono', field: 'NumeroTelefono' },
        { title: 'Ref_Domicilio', field: 'Ref_Domicilio' },

        { title: 'Date', field: 'Date', type: 'datetime' },
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

export default VerClientes;