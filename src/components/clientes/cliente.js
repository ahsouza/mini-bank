import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
// eslint-disable-next-line no-unused-vars
import { updateCliente, deleteCliente } from "../../actions/cliente"
import ClienteDataService from "../../services/ClienteService"

const Cliente = (props) => {
  const initialClienteState = {
    nome: "",
    cpf: null,
    numero_conta: null,
    telefone: null,
    email: "",
    cep: null,
    logradouro: "",
    estado: "",
    cidade: "",
    bairro: ""
  }
  const [currentCliente, setCurrentCliente] = useState(initialClienteState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getCliente = id => {
    ClienteDataService.get(id)
      .then(response => {
        setCurrentCliente(response.data)
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCliente(props.match.params._id)
  }, [props.match.params._id])

  const handleInputChange = event => {
    const { name, value } = event.target
    setCurrentCliente({ ...currentCliente, [name]: value })
  }

  const updateCliente = () => {
    dispatch(updateCliente(currentCliente._id, currentCliente))
      .then(response => {
        console.log(response);
        setMessage("O Cliente foi atualizado com sucesso!")
      })
      .catch(e => {
        console.log(e)
      })
  };

  const removeCliente = () => {
    dispatch(deleteCliente(currentCliente._id))
      .then(() => {
        props.history.push("/cliente")
      })
      .catch(e => {
        console.log(e)
      })
  };

  return (
    <div>
      {currentCliente ? (
        <div className="edit-form">
          <h4>Cliente</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                value={currentCliente.nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="number"
                className="form-control"
                id="cpf"
                name="cpf"
                value={currentCliente.cpf}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="numero_conta">Número da Conta</label>
              <input
                type="number"
                className="form-control"
                id="numero_conta"
                name="numero_conta"
                value={currentCliente.numero_conta}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="number"
                className="form-control"
                id="telefone"
                name="telefone"
                value={currentCliente.telefone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentCliente.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cep">Cep</label>
              <input
                type="number"
                className="form-control"
                id="cep"
                name="cep"
                value={currentCliente.cep}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="logradouro">Logradouro</label>
              <input
                type="text"
                className="form-control"
                id="logradouro"
                name="logradouro"
                value={currentCliente.logradouro}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                className="form-control"
                id="estado"
                name="estado"
                value={currentCliente.estado}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                className="form-control"
                id="cidade"
                name="cidade"
                value={currentCliente.cidade}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                className="form-control"
                id="bairro"
                name="bairro"
                value={currentCliente.bairro}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCliente.cpf ? "Válido" : "Inválido"}
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={removeCliente}>
            Remover
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCliente}
          >
            Atualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Porfavor, selecione algum Cliente...</p>
        </div>
      )}
    </div>
  )
}

export default Cliente;
