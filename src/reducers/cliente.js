import {
  CREATE_CLIENTE,
  READ_CLIENTES,
  UPDATE_CLIENTE,
  DELETE_CLIENTE,
  DELETE_ALL_CLIENTES,
} from "../actions/types"

const initialState = []

const clienteReducer = (clientes = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_CLIENTE:
      return [...clientes, payload]

    case READ_CLIENTES:
      return payload

    case UPDATE_CLIENTE:
      return clientes.map((cliente) => {
        if (cliente._id === payload.id) {
          return {
            ...cliente,
            ...payload,
          };
        } else {
          return cliente;
        }
      })

    case DELETE_CLIENTE:
      return clientes.filter(({ id }) => id !== payload.id)

    case DELETE_ALL_CLIENTES:
      return [];

    default:
      return clientes
  }
}

export default clienteReducer;