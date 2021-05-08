import {
  CREATE_CLIENTE,
  READ_CLIENTES,
  UPDATE_CLIENTE,
  DELETE_CLIENTE,
  DELETE_ALL_CLIENTES,
} from "./types"

import ClienteDataService from "../services/ClienteService"

export const createCliente = (nome, cpf, numero_conta, telefone, email, cep, logradouro, estado, cidade, bairro) => async (dispatch) => {
  try {
    const res = await ClienteDataService.create({ nome, cpf, numero_conta, telefone, email, cep, logradouro, estado, cidade, bairro })
    dispatch({
      type: CREATE_CLIENTE,
      payload: res.data,
    })

    return Promise.resolve(res.data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export const retrieveClientes = () => async (dispatch) => {
  try {
    const res = await ClienteDataService.getAll()

    dispatch({
      type: READ_CLIENTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
  }
}

export const updateCliente = (id, data) => async (dispatch) => {
  try {
    const res = await ClienteDataService.update(id, data)

    dispatch({
      type: UPDATE_CLIENTE,
      payload: data,
    })

    return Promise.resolve(res.data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export const deleteCliente = (id) => async (dispatch) => {
  try {
    await ClienteDataService.remove(id)

    dispatch({
      type: DELETE_CLIENTE,
      payload: { id },
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteAllClientes = () => async (dispatch) => {
  try {
    const res = await ClienteDataService.removeAll()

    dispatch({
      type: DELETE_ALL_CLIENTES,
      payload: res.data,
    });

    return Promise.resolve(res.data)
  } catch (err) {
    return Promise.reject(err)
  }
};

export const findClientesByCpf = (cpf) => async (dispatch) => {
  try {
    const res = await ClienteDataService.findByTitle(cpf)

    dispatch({
      type: READ_CLIENTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
  }
};
