import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class Profile extends React.Component {
    constructor() {
        super();
        this.state ={
            files : ''
        }
    }
    componentDidMount() {
        if(!window.localStorage.getItem('token')){
            this.props.history.push('/Login')
        }
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
                                    <form action="http://localhost:3000/images/upload" encType="multipart/form-data" method="post">
                                        <div className="form-group d-grid gap-3 mt-4">
                                            <input type="file" className="form-control-file" name="files" multiple/>
                                            <input type="submit" value="Enviar imagenes"
                                                   className="btn btn-outline-success btn-block waves-effect waves-light"/>
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