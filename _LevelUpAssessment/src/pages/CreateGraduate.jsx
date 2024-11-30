import React from "react";
import Navbar from "../components/navbar";
import axios from "axios"

import '../App.css';
import '../CreateGraduate.css';




const CreateGraduate = () => {


    return (
        <div>
            <Navbar />
            <div >
                <div style={{ marginLeft: "20px" }}>
                    <table>
                        <tr>
                            <p>LEVEL UP 2024</p>
                        </tr>
                        <tr>
                            <td style={{ whiteSpace: "nowrap" }}>
                                <h1 className="heading"> CREATE GRADUATE </h1>
                            </td>
                            <td style={{ width: "100%", paddingLeft: "75px" }}>
                                <table className="table-lines">
                                    <tr style={{ backgroundColor: "var(--blue)" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: "var(--green)" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: "var(--orange)" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: "var(--red)" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                    </table>



                </div>
                <div className="body">
                    <form>
                        <table className="table-input">
                            <tr>
                                <td>
                                    <label className="label">NAME</label>
                                    <br />
                                    <input id="Gradname" type="text"></input>
                                </td>
                                <td>
                                    <label className="label">SURNAME</label>
                                    <br />
                                    <input id="Gradname" type="text"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="label">PHONE NUMBER</label>
                                    <br />
                                    <input id="Gradname" type="text"></input>
                                </td>
                                <td>
                                    <label className="label">EMAIL ADDRESS</label>
                                    <br />
                                    <input id="Gradname" type="email"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="label">DATE OF BIRTH</label>
                                    <br />
                                    <input id="Gradname" type="text"></input>
                                </td>
                                <td style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <button>
                                        ADD NEW GRADUATES <img src="/assets/icons/rocket_white.webp" style={{ width: "45px", height: "25px", marginLeft: "20px" }} />
                                    </button>
                                </td>
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