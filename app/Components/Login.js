import React from 'react';
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
import avatar from "../assets/images/iniciar-sesion.png"


//css
import css from "../assets/css/login.css";


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        if(window.localStorage.getItem('token')){
            alert("Sesión ya iniciada")
            this.props.history.push('/')
        }
    }
    changeField(e) {
        let field = e.target.name
        let value = e.target.value
        this.setState(update(this.state, {
            [field]: { $set: value }
        }))
    }
    usernameValidate(e){
        let username = this.state.username
        if (this.state.username.length === 0) {
            this.label.innerHTML = '* Campo obligatorio'
        }
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                this.label.innerHTML = ""
            },
            error => {
                this.label.innerHTML = "El usuario no existe."
            })
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
                APIInvoker.invokePOST('/users/login',user, data => {
                    //alert(data.message)
                    window.localStorage.setItem('token', data.token)
                    this.props.history.push('/')
                }, error => {
                    //alert(error.message)
                    this.pass.innerHTML = error.message
                })
                e.preventDefault();
            }
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="login-container">
                        <div id="output"></div>
                        <img src={avatar} className="avatar"/>
                        <div className="form-box">
                            <form action="" method="">
                                <div className="form-floating mb-3">
                                    <input className="form-control"
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Manuel"
                                        onChange={this.changeField.bind(this)}
                                        onBlur={this.usernameValidate.bind(this)} />
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
                                        onChange={this.changeField.bind(this)} />
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
                <div className="mt-4 text-center">
                    <h4 className="font-size-20">Aun no tienes una cuenta?</h4>
                    <p><a href="/Register"
                          className="btn btn btn-outline-dark btn-sm"> Registrese ahora </a></p>
                </div>
            </div>
        )
    }
}
export default Login;