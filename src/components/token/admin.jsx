import { useState } from "react";
import Swal from 'sweetalert2';
import {ethers} from 'ethers';
import { contractDetails } from "../blockchain/contractDetails";
import ContentTitle from "../contentTitle";
import { Col, Row } from "react-bootstrap";

const Admin = ({writeContractFunction, verifyTransaction})=>{
    const withdrawEther = async() =>{
        const KBRContract = await writeContractFunction('KBR');
        KBRContract.withdrawEth().then((data) => {
           
            data && data.hash && verifyTransaction(data.hash)
        })
        .catch((error) => {
            console.log("error", error)
            if (error.code === 4001) {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: 'MetaMask Tx Signature: User denied transaction signature.'
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
            
        })
    }

    const allowWithdraw = async() =>{
        const KBRContract = await writeContractFunction('STAKES');
        KBRContract.allowWithdrawal().then((data) => {
           
            data && data.hash && verifyTransaction(data.hash)
        })
        .catch((error) => {
            console.log("error", error)
            if (error.code === 4001) {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: 'MetaMask Tx Signature: User denied transaction signature.'
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
            
        })
    }
    return(
        <div className="stakeWrapper padding-inline padding-block"> {/* revenueWrapper */}
         {/* <h2 className="title text-center">Admin</h2> */}
         <div className="text-center pb-4">
            <ContentTitle title="Admin" />
            <br/> <br/>
         </div>
         <Row className="g-5 justify-content-center">
            <Col md="6" lg='4' className="d-flex justify-content-center justify-content-md-end mt-0">
                <div className="buttonWrapper">
                    <button onClick={withdrawEther}>Withdraw ETH</button>
                </div>
            </Col>
            <Col md="6" lg='4' className="d-flex justify-content-center justify-content-md-start mt-0">
                <div className="buttonWrapper">
                    <button onClick={allowWithdraw}>Allow Withdraw</button>
                </div>
            </Col>
         </Row>
       </div>
    )
   
}

export default Admin;