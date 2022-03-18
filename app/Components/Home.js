import React from "react";


class Home extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <div>
                <h1>Bienvenido al sistema de gestion de fotos.</h1>
                <p>.Ingresa las fotos que desea ingresar</p>
                <form>
                    <input type="file" id="files" name="files" multiple/>

                </form>
            </div>
        )
    }
}
export default Home;