import React from 'react';
import css from "../assets/css/Register.css";
import update from "immutability-helper";


class Register extends React.Component{
    constructor() {
        super();
        this.state= {
            nombre: '',
            apellido: '',
            userName:'',
            password:''
        }

    }
    componentDidMount() {
        if(window.localStorage.getItem('token')){
            alert("Para continuar cierre la sesión actual")
        }else {

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
        let userName = this.state.userName
        if (userName) {
            this.username.innerHTML = '* El nombre de usuario no está disponible'
            this.usernameOk = true
        } else
            this.usernameOk = false
    }

    validarCampos(){
        let estado = true;

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else{
            this.nombre.innerHTML = ''
        }

        if (this.state.apellido.length === 0) {
            this.apellido.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.apellido.innerHTML = ''

        if (this.state.userName.length === 0) {
            this.username.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.password.length === 0) {
            this.password.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.password.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true

    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()

        if (this.status && this.usernameOk) {
            let user = {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                userName: this.state.userName,
                password: this.state.password,
            }
            console.log(user)
        }
        else {
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
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
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="nombre"
                                           id="nombre"
                                           placeholder="Manuel"
                                           value={this.state.nombre}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="Nombre">Nombre</label>
                                </div>
                                <label ref={self=> this.nombre = self}
                                       className="form-text text-danger"></label>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="apellido"
                                           id="apellido"
                                           placeholder="Ballinas"
                                           value={this.state.apellido}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="apellido">Apellido</label>
                                </div>
                                <label ref={self=> this.apellido = self}
                                       className="form-text text-danger"></label>
                                <br/>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="userName"
                                           id="userName"
                                           placeholder="manu"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.usernameValidate.bind(this)}/>
                                    <label htmlFor="username">UserName</label>
                                </div>
                                <label ref={self=> this.username = self}
                                       className="form-text text-danger"></label>
                                <br/>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="password"
                                           name="password"
                                           id="password"
                                           placeholder="1234"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <label ref={self=> this.password = self}
                                       className="form-text text-danger"></label>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-success"
                                            type="button"
                                            onClick={this.crearCuenta.bind(this)}>Registrar
                                    </button>
                                </div>
                                <div ref={self => this.messageError = self}></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;