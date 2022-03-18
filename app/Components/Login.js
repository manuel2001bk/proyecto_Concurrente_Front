import React from 'react';
import update from "immutability-helper";


//css
import css from "../assets/css/login.css";


class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }
    changeField(e) {
        let field = e.target.name
        let value = e.target.value
        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }
    usernameValidate(e){
        let username = this.state.username
        if (this.state.username.length === 0) {
            this.label.innerHTML = '* Campo obligatorio'
        }
    }
    iniciarSesion(e){
        //Signup
        if (this.state.username.length === 0) {
            this.label.innerHTML = '* Campo obligatorio'
        }else{
            if (this.state.password.length === 0){
                this.pass.innerHTML = '* Campo obligatorio'
            }else{
                let user = {
                    userName: this.state.username,
                    password: this.state.password
                }
                console.log(user)
            }
        }
    }
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
                                           name="username"
                                           id="username"
                                           placeholder="Manuel"
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.usernameValidate.bind(this)}/>
                                    <label htmlFor="username">Nombre de usuario</label>
                                    <div id="usernameMessage"
                                         ref={self => this.label = self}
                                         className="form-text text-danger">
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="password"
                                           name="password"
                                           id="password"
                                           placeholder="1234"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <div id="passwordHelp"
                                         className="form-text text-danger"
                                         ref={self => this.pass = self}>
                                    </div>
                                </div>
                                <div className="d-grid gap-3 mt-4">
                                    <button className="btn btn-outline-success btn-block waves-effect waves-light"
                                            type="button"
                                            onClick={this.iniciarSesion.bind(this)}>Iniciar sesión
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
export default Login;