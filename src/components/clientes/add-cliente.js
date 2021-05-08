import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { createCliente } from "../../actions/cliente"

const AddCliente = () => {
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
  };
  const [cliente, setCliente] = useState(initialClienteState)
  const [submitted, setSubmitted] = useState(false)

  const dispatch = useDispatch()

  const handleInputChange = event => {
    const { name, value } = event.target
    setCliente({ ...cliente, [name]: value })
  };

  const saveCliente = () => {
    const {
      nome,
      cpf,
      numero_conta,
      telefone,
      email,
      cep,
      logradouro,
      estado,
      cidade,
      bairro
      } = cliente;

    dispatch(createCliente(nome, cpf, numero_conta, telefone, email, cep, logradouro, estado, cidade, bairro))
      .then(data => {
        setCliente({
          nome: data.nome,
          cpf: data.cpf,
          numero_conta: data.numero_conta,
          telefone: data.telefone,
          email: data.email,
          cep: data.cep,
          logradouro: data.logradouro,
          estado: data.estado,
          cidade: data.cidade,
          bairro: data.bairro,
        });
        setSubmitted(true);

        console.log(data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const newCliente = () => {
    setCliente(initialClienteState)
    setSubmitted(false)
  }

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Cliente salvo com sucesso!</h4>
          <button className="btn btn-success" onClick={newCliente}>
            Adicionar
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              required
              value={cliente.nome}
              onChange={handleInputChange}
              name="nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input
              type="number"
              className="form-control"
              id="cpf"
              required
              value={cliente.cpf}
              onChange={handleInputChange}
              name="cpf"
            />
          </div>

          <div className="form-group">
            <label htmlFor="numero_conta">Número da conta</label>
            <input
              type="numero_conta"
              className="form-control"
              id="numero_conta"
              required
              value={cliente.numero_conta}
              onChange={handleInputChange}
              name="numero_conta"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="number"
              className="form-control"
              id="telefone"
              required
              value={cliente.telefone}
              onChange={handleInputChange}
              name="telefone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={cliente.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cep">CEP</label>
            <input
              type="number"
              className="form-control"
              id="cep"
              required
              value={cliente.cep}
              onChange={handleInputChange}
              name="cep"
            />
          </div>

          <div className="form-group">
            <label htmlFor="logradouro">Logradouro</label>
            <input
              type="text"
              className="form-control"
              id="logradouro"
              required
              value={cliente.logradouro}
              onChange={handleInputChange}
              name="logradouro"
            />
          </div>
     
          <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              className="form-control"
              id="estado"
              required
              value={cliente.estado}
              onChange={handleInputChange}
              name="logradouro"
            />
          </div>
     
          <div className="form-group">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              required
              value={cliente.cidade}
              onChange={handleInputChange}
              name="cidade"
            />
          </div>
     
          <div className="form-group">
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              className="form-control"
              id="bairro"
              required
              value={cliente.bairro}
              onChange={handleInputChange}
              name="bairro"
            />
          </div>

          <button onClick={saveCliente} className="btn btn-success">
            salvar
          </button>
        </div>
      )}
    </div>
  )
}
export default AddCliente;
