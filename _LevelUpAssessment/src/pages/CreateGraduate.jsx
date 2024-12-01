import React, {useState} from "react";
import Navbar from "../components/navbar";
import axios from "axios"

import '../App.css';
import '../CreateGraduate.css';
import { ContainerWithChildren } from "postcss/lib/container";



const CreateGraduate = () => {

    const [firstName, setFName] = useState('');
    const [lastName, setSurname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [dateOfBirth, setDOB] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const grad = {
            firstName,
            lastName,
            emailAddress,
            dateOfBirth,
        };

        try {
            const response = await fetch('https://localhost:7041/api/Graduates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(grad),
            });

            //for debugging
            console.log(JSON.stringify(grad).toString);

            if (response.ok) {
                alert('Graduate successfully created.')
            } else {
                alert('Graduate creation failed.')
            }

        } catch (error) {
            console.error('Error occured:', error);
        }
    };


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
                    <form onSubmit={handleSubmit}>
                        <table className="table-input">
                            <tr>
                                <td>
                                    <label className="label">NAME</label>
                                    <br />
                                    <input 
                                    id="GradName" 
                                    type="text"
                                    value = {firstName}
                                    onChange = {(e) => setFName(e.target.value)}
                                    required/>
                                </td>
                                <td>
                                    <label className="label">SURNAME</label>
                                    <br />
                                    <input 
                                    id="GradSurname" 
                                    type="text"
                                    value = {lastName}
                                    onChange = {(e) => setSurname(e.target.value)}
                                    required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {/* TODO: integrate phone number into backend */}
                                    <label className="label">PHONE NUMBER</label> 
                                    <br />
                                    <input 
                                    id="GradPhoneNum" 
                                    type="text"
                                    // value = 
                                    // onChange = {(e) => setFName(e.target.value)}
                                    // required
                                    />
                                </td>
                                <td>
                                    <label className="label">EMAIL ADDRESS</label>
                                    <br />
                                    <input 
                                    id="GradEmail" 
                                    type="email"
                                    value = {emailAddress}
                                    onChange = {(e) => setEmailAddress(e.target.value)}
                                    required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="label">DATE OF BIRTH</label>
                                    <br />
                                    <input 
                                    id="GradDOB" 
                                    type="text"
                                    
                                    value = {dateOfBirth}
                                    onChange = {(e) => setDOB(e.target.value)}
                                    required/>
                                </td>
                                <td style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <button type="submit">
                                        ADD NEW GRADUATES <img src="/assets/icons/rocket_white.webp" style={{ width: "45px", height: "25px", marginLeft: "20px" }} />
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateGraduate;