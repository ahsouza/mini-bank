import http from "../http-common"

const getAll = () => {
  return http.get("/clientes")
}

const get = id => {
  return http.get(`/cliente/${id}`)
}

const create = data => {
  return http.post("/cliente", data)
}

const update = (id, data) => {
  return http.put(`/cliente/${id}`, data)
}

const remove = id => {
  return http.delete(`/cliente/${id}`)
}

const removeAll = () => {
  return http.delete(`/clientes`)
}

const findByCpf = cpf => {
  return http.get(`/clientes?cpf=${cpf}`)
}

const ClienteService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByCpf
};

export default ClienteService
