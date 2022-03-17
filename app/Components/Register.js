import React from 'react';
import css from "../assets/css/Register.css";


class Register extends React.Component{
    render() {
        return (
            <div>
                <div className="container">
                    <div className="login-container">
                        <div id="output"></div>
                        <div className="avatar"></div>
                        <div className="form-box">
                            <form action="" method="">
                                <div className="form-floating mb-3">
                                    <input className="form-control"
                                           type="text"
                                           name="name"
                                           id="name"
                                           placeholder="Manuel"/>
                                    <label htmlFor="name">Nombre</label>
                                    <div id="nameMessage"
                                         className="form-text text-danger">
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control"
                                           type="text"
                                           name="apellido"
                                           id="apellido"
                                           placeholder="Ballinas"/>
                                    <label htmlFor="apellido">Apellido</label>
                                    <div id="apellidoMessage"
                                         className="form-text text-danger">
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control"
                                           type="text"
                                           name="username"
                                           id="username"
                                           placeholder="manu"/>
                                    <label htmlFor="username">Usuario</label>
                                    <div id="usernameMessage"
                                         className="form-text text-danger">
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="password"
                                           name="password"
                                           id="password"
                                           placeholder="1234"
                                           aria-describedby="passwordHelp"/>
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <div id="passwordHelp"
                                         className="form-text text-danger">
                                    </div>
                                </div>
                                <div className="d-grid gap-3 mt-4">
                                    <button className="btn btn-outline-success btn-block waves-effect waves-light"
                                            type="button">Iniciar sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;