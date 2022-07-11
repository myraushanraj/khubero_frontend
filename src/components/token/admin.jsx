import { useState } from "react";
import Swal from 'sweetalert2';
import {ethers} from 'ethers';
import { contractDetails } from "../blockchain/contractDetails";

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
        <div className="stakeWrapper revenueWrapper">
         <h2 className="title text-center">Admin</h2>
         <div className="row">
            <div className="col-md-3 text-center">
                <button className="btn btn-success" onClick={withdrawEther}>Withdraw ETH</button>
            </div>
            <div className="col-md-3 text-center">
                <button className="btn btn-success" onClick={allowWithdraw}>Allow Withdraw</button>
            </div>
         </div>
       </div>
    )
   
}

export default Admin;