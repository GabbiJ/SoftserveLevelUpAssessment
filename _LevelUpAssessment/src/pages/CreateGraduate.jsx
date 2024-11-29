import React from "react";
import Navbar from "../components/navbar";
import axios from "axios"

import '../App.css';
import '../CreateGraduate.css';


const CreateGraduate = () => {

    return (
        <div>
            <Navbar />
            <div className="body">
                <div>
                <h1 className="heading"> Create Graduate </h1>

                </div>
                <div>
                    <form>
                        <table className="table">
                            <tr>
                            <label className="label">NAME</label>
                            <label className="label">SURNAME</label>

                            </tr>
                            <tr>
                                <input id="Gradname" type="text"></input>
                                <input id="Gradname" type="text"></input>
                            </tr>
                        </table>
                    </form>
                </div>
                </div>
            <form>


            </form>
        </div>
    )
}

export default CreateGraduate;