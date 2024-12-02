import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import 'reactjs-popup/dist/index.css';

import '../App.css';
import '../CreateGraduate.css';
import Popup from "reactjs-popup";

const ViewAllGraduates = () => {

    const [grad, setGrads] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchGrads = async () => {
            try {
                const response = await fetch("https://localhost:7041/api/Graduates");
                if (!response.ok) {
                    alert('Failed to load graduates.');
                    return;
                }

                setGrads(await response.json())

            } catch (error) {
                console.error('Error occured:', error);
            }
        };

        fetchGrads();
    }, [])

    // TODO : fix up UI
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
                            <h1 className="heading"> GRADUATE LIST </h1>
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

            <section className="md:px-12 px-4 mt-6">
                <table className="graduate-list" style={{width: "100%", border: "1px solid var(--white)}"}}>
                    <thead style={{color: "var(--black)"}} className="bg-white uppercase micro-5 text-3xl">
                        <tr>
                            <th className="md:rounded-s-xl rounded-s-lg md:py-2 py-1 md:px-8 px-4">
                                <div className="relative flex justify-start items-center">
                                    Full Name/Names
                                    <img src="../assets/icons/rocket_black.webp" className="absolute right-0 h-2/3 md:block hidden" />
                                </div>
                            </th>
                            <th className="md:py-2 py-1 md:px-8 px-4 md:block hidden">
                                <div className="relative flex justify-start items-center">
                                    Contact Details
                                    <img src="../assets/icons/rocket_black.webp" className="absolute right-0 h-2/3" />
                                </div>
                            </th>
                            <th className="md:rounded-e-xl rounded-e-lg md:py-2 py-1 md:px-8 px-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {grad.map((grad) => (
                            <tr key={grad.graduateId}>
                                <td ><strong>{grad.firstName}</strong> {grad.lastName}</td>
                                <td >{grad.emailAddress}</td>
                                <td style={{display: "flex", justifyContent: "space-evenly"}}>
                                    <button className="view-mode-button" onClick={() => navigate(`/customer/${grad.graduateId}`)}>
                                        VIEW MODE
                                    </button>
                                    <button className="update-button" onClick={() => navigate(`/update/${grad.graduateId}`)}>
                                        UPDATE
                                    </button>
                                    <Popup trigger={<button className="delete-button">DELETE</button>} modal nested>
                                        {
                                            close => (
                                                <div className='popup-delete'>
                                                    <div>
                                                        <label className="popup-label2" style={{ fontSize: "18pt", }}>DELETE GRADUATE</label>
                                                        <label className="popup-label" style={{ fontSize: "24pt", fontWeight: "1000" }}>DELETE</label>
                                                        <label className="popup-label" style={{ fontSize: "24pt" }}><strong>{grad.firstName}</strong> {grad.lastName}</label>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <div>
                                                        <button className="delete-button" onClick={() => { deleteGrad(grad.graduateId, grad.firstName, grad.lastName, grad.emailAddress, grad.dateOfBirth); close(); }}>
                                                            DELETE
                                                        </button>
                                                        <br />
                                                        <button className="update-button" onClick={() => close()}>
                                                            CANCEL
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Popup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

const deleteGrad = async (id, firstName, lastName, emailAddress, dateOfBirth) => {
    const grad = {
        graduateId: id,
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        dateOfBirth: dateOfBirth,
    };

    try {
        const response = await fetch(`https://localhost:7041/api/Graduates/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(grad),
        })

        if (response.ok) {
            alert('Graduate successfully deleted.')
        } else {
            alert('Graduate delete failed.')
        }
        
    }catch (error) {
        console.error('Error occured:', error);
    }
}

export default ViewAllGraduates;