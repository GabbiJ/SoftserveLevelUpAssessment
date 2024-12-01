import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

import '../App.css';
import '../CreateGraduate.css';

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

            <div style={{ marginLeft: "20px" }}>
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
                <table className="w-full border border-white md:rounded-t-xl rounded-t-lg overflow-hidden">
                    <thead className="bg-white uppercase micro-5 text-3xl">
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
                    <tbody className="graduate-list">
                        {grad.map((grad) => (
                            <tr key={grad.graduateId}>
                                <td className="md:py-4 py-2 md:px-8 px-4"><strong>{grad.firstName}</strong> {grad.lastName}</td>
                                <td className="md:py-4 py-2 md:px-8 px-4 md:block hidden">{grad.emailAddress}</td>
                                <td className="md:py-4 py-2 md:px-8 px-4">
                                    <button className="view-mode-button" onClick = {() => navigate(`/customer/${grad.graduateId}`)}>
                                        VIEW MODE
                                    </button>
                                    <button className="update-button">
                                        UPDATE
                                    </button>
                                    <button className="delete-button">
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ViewAllGraduates;