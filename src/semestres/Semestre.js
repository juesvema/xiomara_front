import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Semestre extends Component {

    render() {
        let materias = [];
        console.log(this.props.location.semestre)
        // if (this.props.location.semestre === 'uno') {
        //     materias = lo que venga de mongo del semestre 1
        // } else if (this.props.location.semestre === 'dos') {
        //     materias = ...
        // } else if (this.props.location.semestre === 'tres') {
        //     materias = ...
        // } else if (this.props.location.semestre === 'cuatro') {
        //     materias = ...
        // } else if (this.props.location.semestre === 'cinco') {
        //     materias = ...
        // }
        return (
            <div>
                <form>
                    <label className="radio-inline">
                        <input type="radio" name="optradio" defaultChecked/>{materias}
                    </label>
                </form>
                <Link to={{pathname: "/", semestre: 'dos'}} onClick={()=>alert('Registro Exitoso')}>Ingresar</Link>
            </div>
        );
    }
}

export default Semestre;