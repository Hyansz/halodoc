import Card from "react-bootstrap/Card";

// const Cards = (props) => {
//     return (
//         <a href={props.link}>
//             <Card md="2" className="text-center py-2" style={{ width: "100%", height: "85%", border: "1px solid grey", color: "black" }}>
//                 <Card.Img variant="top" src={props.image} style={{ width: "75px", height: "75px", margin: "auto" }} />
//                 <Card.Body>
//                     <Card.Text style={{ fontSize: "14px", fontWeight: "600"}}>
//                         {props.title}
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         </a>
//     );
// };

// export default Cards;

import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Dokter from "./../Assets/tanya-dokter.png"
import ObatDokter from "./../Assets/obat-dokter.png"
import JadwalDokter from "./../Assets/jadwal-dokter.png"
import LabDokter from "./../Assets/lab-dokter.png"
import SuntikObat from "./../Assets/suntik-obat.png"
import Asuransi from "./Asuransi";

export default function Cards(props) {
    return (
        <MDBContainer>
            <MDBRow className="mb-3">
                <MDBCol md="2">
                    <a href="https://www.halodoc.com/tanya-dokter">
                        <Card className="text-center py-2" style={{ width: "100%", height: "85%", border: "1px solid grey", color: "black" }}>
                            <Card.Img variant="top" src={Dokter} style={{ width: "75px", height: "75px", margin: "auto" }} />
                            <Card.Body>
                                <Card.Text style={{ fontSize: "14px", fontWeight: "600"}}>
                                    Tanya Dokter
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol md="2">
                    <a href="https://www.halodoc.com/obat-dan-vitamin">
                        <Card className="text-center py-2" style={{ width: "100%", height: "85%", border: "1px solid grey", color: "black" }}>
                            <Card.Img variant="top" src={ObatDokter} style={{ width: "75px", height: "75px", margin: "auto" }} />
                            <Card.Body>
                                <Card.Text style={{ fontSize: "14px", fontWeight: "600"}}>
                                    Toko Kesehatan
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol md="2">
                    <a href="https://www.halodoc.com/rumah-sakit">
                        <Card className="text-center py-2" style={{ width: "100%", height: "85%", border: "1px solid grey", color: "black" }}>
                            <Card.Img variant="top" src={JadwalDokter} style={{ width: "75px", height: "75px", margin: "auto" }} />
                            <Card.Body>
                                <Card.Text style={{ fontSize: "14px", fontWeight: "600"}}>
                                    Buat Janji RS
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol md="2">
                    <a href="https://www.halodoc.com/janji-medis">
                        <Card className="text-center py-2" style={{ width: "100%", height: "85%", border: "1px solid grey", color: "black" }}>
                            <Card.Img variant="top" src={LabDokter} style={{ width: "75px", height: "75px", margin: "auto" }} />
                            <Card.Body>
                                <Card.Text style={{ fontSize: "14px", fontWeight: "600"}}>
                                    Janji Medis
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol md="2">
                    <a href="https://www.halodoc.com/homelab/packages">
                        <Card className="text-center py-2" style={{ width: "100%", height: "85%", border: "1px solid grey", color: "black" }}>
                            <Card.Img variant="top" src={SuntikObat} style={{ width: "75px", height: "75px", margin: "auto" }} />
                            <Card.Body>
                                <Card.Text style={{ fontSize: "14px", fontWeight: "600"}}>
                                    Layanan Home Lab
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
                <MDBCol sm="4">
                    <Asuransi />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
