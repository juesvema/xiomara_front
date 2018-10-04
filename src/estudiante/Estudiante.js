import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Estudiante extends Component {
    render() {
        return (
            <div>
                <form id="login-form" className="text-left">
                    <div></div>
                    <div className="main-login-form">
                        <div className="login-group">
                            <div className="form-group">
                                <label>Cedula</label>
                                <br/>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cedula"
                                    name="cedula"
                                    placeholder="cedula"/>
                            </div>
                            <div className="form-group">
                                <label>Semestre</label>
                                <br/>
                                <select className="form-control" id="sel1">                                
                                    <option>Semestre 1</option>
                                    <option>Semestre 2</option>
                                    <option>Semestre 3</option>
                                    <option>Semestre 4</option>
                                    <option>Semestre 5</option>                                  
                                </select>
                            </div>
                        </div>
                        {/* Ese 'dos' se tiene que cambiar por lo que traiga el option del select */}
                        <Link to={{pathname: "/semestre", semestre: 'dos'}}>Ingresar</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Estudiante;