import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import css from "../assets/css/Profile.css"

import imagen_fondo from "../assets/images/fondo-colores.jpg"


class Profile extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        if(!window.localStorage.getItem('token')){
            this.props.history.push('/Login')
        }
    }
    enviar (e) {
        console.log("Enviado")
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="center ">
                    <div className="container">
                        <div className="card overflow-hidden my-5 pt-sm-4">
                            <div className="overlay"/>
                            <div className="row justify-content-around">
                                <div className="col-8">
                                    <h1>Bienvenido al sistema de gestion de fotos.</h1>
                                    <p>Ingresa las fotos que desea ingresar</p>
                                    <form>
                                        <input type="file" id="files" name="files" multiple />
                                        <div className="d-grid gap-3 mt-4">
                                            <button className="btn btn-outline-success btn-block waves-effect waves-light"
                                                    type="button"
                                                    onClick={this.enviar.bind(this)}>enviar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default Profile;