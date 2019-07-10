import React from 'react'
import { connect } from 'react-redux'
import reducers from '../reducers'
import * as usuariosActions from '../actions/usuariosActions'
class Usuarios extends React.Component {
    componentDidMount = () => {
        /* try {
            const getUsers = await fetch('https://jsonplaceholder.typicode.com/users')
            const usuarios = await getUsers.json()
            this.setState({
                usuarios,
            })
        } catch (err) {} */
        this.props.traerTodos()
    }
    ponerFilas = () =>
        this.props.usuarios.map(usuario => (
            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
            </tr>
        ))

    render() {
        console.log(this.props)
        return (
            <div>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>nombre</th>
                            <th>correo</th>
                            <th>enlace</th>
                        </tr>
                    </thead>
                    <tbody>{this.ponerFilas()}</tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = reducers => {
    return reducers.usuariosReducer
}

export default connect(
    mapStateToProps,
    usuariosActions
)(Usuarios)
