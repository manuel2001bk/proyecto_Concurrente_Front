import React from 'react'
import logout from '../assets/images/logout.png'

class Header extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"/>
                        <a className="navbar-brand" href="/"></a>
                        <div className="navbar-nav justify-content-md-end">
                            <a className="nav-link active"
                               aria-current="page" href="/Login" onClick={this.salir.bind(this)}>
                            <img src={logout} alt="" width="25" height="25" color="white"/></a>
                        </div>
                    </div>
                </nav>
            </div>

            /*
             <div className="navbar-nav justify-content-md-end">
                            <a className="nav-link active" aria-current="page" href="/Login">Login</a>
                        </div>
                            <div className="navbar-nav justify-content-md-end">
                                <a className="nav-link active" aria-current="page" href="/Login">Login</a>
                                <a className="nav-link active" href="/Register">Register</a>
                            </div>
             */
        )
    }
   salir(e){
        localStorage.removeItem('token')
       this.props.history.push('/')
   }
}
export default Header;