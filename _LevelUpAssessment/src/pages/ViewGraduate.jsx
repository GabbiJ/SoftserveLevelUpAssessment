import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";

import '../App.css';
import '../CreateGraduate.css';

const ViewGraduate = () => {

    const { id } = useParams();
    //for debugging
    console.log(`Graduate id: ${id}`)

    const [grad, setGrad] = useState('');

    useEffect(() => {
        const fetchGrad = async () => {
            try {
                const response = await fetch(`https://localhost:7041/api/Graduates/${id}`);

                if (!response.ok) {
                    alert('Failed to load graduate.');
                    return;
                }

                setGrad(await response.json());

            }catch (error) {
                console.error('Error occured:', error);
            }
        }

        fetchGrad();
    }, [id]);

    return (
        <div>
            <Navbar />
            <div style={{ marginLeft: "40px" }}>
                <table>
                    <tr>
                        <p>LEVEL UP 2024</p>
                    </tr>
                    <tr>
                        <td style={{ whiteSpace: "nowrap" }}>
                            <h1 > VIEW GRADUATE DETAILS </h1>
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
                <label className="grad-name-heading"><strong>{grad.firstName}</strong> {grad.lastName}</label>
                <table className="table-grad-details">
                    <tr style={{ borderBottom: "1px solid var(--white)" }}>
                        <td >
                            <label style={{ fontSize: "12px", paddingLeft: "25px" }}>PHONE NUMBER</label>
                            <br />
                            <label style={{borderRight: "1px solid var(--white)"}} className="grad-info-label"></label>
                        </td>
                        <td>
                            <label style={{ fontSize: "12px", paddingLeft: "25px" }}>EMAIL ADDRESS</label>
                            <br />
                            <label style= {{borderRight: "1px solid var(--white)", width: "100%"}} className="grad-info-label">{grad.emailAddress}</label>
                        </td>
                        <td >
                            <label style={{ fontSize: "12px", paddingLeft: "25px"}}>AGE</label>
                            <br />
                            <label className="grad-info-label">{grad.age}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label style={{ fontSize: "12px", paddingLeft: "25px" }}>DATE CREATED</label>
                            <br />
                            <label style={{borderRight: "1px solid var(--white)"}} className="grad-info-label">{grad.dateCreated}</label>
                        </td>
                        <td>
                        <label style={{ fontSize: "12px", paddingLeft: "25px" }}>LAST EDITED</label>
                            <br />
                            <label className="grad-info-label">{grad.dateEdited || "This graduate has never been edited"} </label>
                        </td>
                    </tr>
                </table>
            </div>


        </div>
    )
}

export default ViewGraduate;