import React from 'react'

const RegistrarProducto = () => {
  return (
 
 <div className="container mt-4">
        <div className="row">

          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar paciente</h4>
              </div>
              <div className="card-body">
                <form onSubmit={"guardar"}>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Nombre Empresa</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Nombre Medicamento</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Nombre Compuesto</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Precio Unitario</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Precio Caja</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Estado</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Imagen</label>
                      <input type="file" className="form-control required" />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-outline-info">
                    <span class="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default RegistrarProducto;