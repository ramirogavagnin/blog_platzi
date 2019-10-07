import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes'
import axios from 'axios'
export const traerTodos = () => async dispatch => {
    dispatch({ type: CARGANDO })
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: TRAER_TODOS,
        payload: respuesta.data,
    })
}
