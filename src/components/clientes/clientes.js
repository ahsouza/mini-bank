import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  retrieveClientes,
  findClientesByCpf,
  deleteAllClientes,
} from "../../actions/cliente"
import { Link } from "react-router-dom"

const ClientesList = () => {
  const [currentCliente, setCurrentCliente] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [searchCpf, setSearchCpf] = useState(null)

  const clientes = useSelector(state => state.clientes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(retrieveClientes())
  }, [])

  const onChangeSearchCpf = e => {
    const searchCpf = e.target.value
    setSearchCpf(searchCpf)
  }

  const refreshData = () => {
    setCurrentCliente(null)
    setCurrentIndex(-1)
  }

  const setActiveCliente = (cliente, index) => {
    setCurrentCliente(cliente)
    setCurrentIndex(index)
  }

  const removeAllClientes = () => {
    dispatch(deleteAllClientes())
      .then(response => {
        console.log(response)
        refreshData()
      })
      .catch(e => {
        console.log(e)
      })
  }

  const findByCpf = () => {
    refreshData();
    dispatch(findClientesByCpf(searchCpf))
  }

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Pesquisar por CPF"
            value={searchCpf}
            onChange={onChangeSearchCpf}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCpf}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Clientes</h4>

        <ul className="list-group">
          {clientes &&
            clientes.map((cliente, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCliente(cliente, index)}
                key={index}
              >
                {cliente.cpf}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllClientes}
        >
          Apagar todos
        </button>
      </div>
      <div className="col-md-6">
        {currentCliente ? (
          <div>
            <h4>Cliente</h4>
            <div>
              <label>
                <strong>Nome:</strong>
              </label>{" "}
              {currentCliente.nome}
            </div>
            <div>
              <label>
                <strong>CPF:</strong>
              </label>{" "}
              {currentCliente.cpf}
            </div>
            <div>
              <label>
                <strong>Número da Conta:</strong>
              </label>{" "}
              {currentCliente.numero_conta}
            </div>
            <div>
              <label>
                <strong>Telefone:</strong>
              </label>{" "}
              {currentCliente.telefone}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentCliente.email}
            </div>
            <div>
              <label>
                <strong>CEP:</strong>
              </label>{" "}
              {currentCliente.cep}
            </div>
            <div>
              <label>
                <strong>Logradouro:</strong>
              </label>{" "}
              {currentCliente.logradouro}
            </div>
            <div>
              <label>
                <strong>Estado:</strong>
              </label>{" "}
              {currentCliente.estado}
            </div>
            <div>
              <label>
                <strong>Cidade:</strong>
              </label>{" "}
              {currentCliente.cidade}
            </div>
            <div>
              <label>
                <strong>Bairro:</strong>
              </label>{" "}
              {currentCliente.bairro}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentCliente.cpf ? "Válido" : "Inválido"}
            </div>

            <Link
              to={"/cliente/" + currentCliente._id}
              className="badge badge-warning"
            >
              Alterar
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor, selecione um cliente...</p>
          </div>
        )}
      </div>
    </div>
  )
};

export default ClientesList;
