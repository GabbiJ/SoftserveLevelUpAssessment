import React from "react";
import { useNavigate } from "react-router-dom";

import '../App.css';
import '../CreateGraduate.css';
import Navbar from "../components/navbar";

const Welcome = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/backgrounds/space-background.webp"})`,
                height: "100%",
                marginTop: "-70px",
                backgroundSize: "cover",
                backgroundColor: "black",
                backgroundRepeat: "no-repeat",
            }}>
                <div style={{ textAlign: "center" }}>
                    <img src="/assets/logos/softserve-logo.webp" style={{ display: "block", margin: "70px auto", padding: "50px 0", width: "auto", height: "175px" }} />
                </div>
                <div style={{ position: "relative", height: "100vh" }}>
                <img style={{ marginLeft: "70px" }} src="/assets/logos/time-to-level-up.webp"  />

                    <button style={{ marginLeft: "70px" }} onClick={() => navigate(`/viewall`)}>
                        VIEW GRADUATES <img src="/assets/icons/rocket_white.webp" style={{ width: "45px", height: "25px", marginLeft: "20px" }} />
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <table className="table-lines">
                                    <tr style={{ backgroundColor: "var(--blue)", border: "5px solid black" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: "var(--green)", border: "5px solid black" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: "var(--orange)", border: "5px solid black" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: "var(--red)", border: "5px solid black" }}>
                                        <td>&nbsp;</td>
                                    </tr>
                                </table>
                    <img src="/assets/illustrations/cover.webp" style={{ position: "fixed", bottom: "0", right: "0", objectFit: "contain", maxHeight: "100%", maxWidth: "100%", width: "auto", height: "1200px" }} />
                </div>
            </div>
        </div>
    )
}

export default Welcome;