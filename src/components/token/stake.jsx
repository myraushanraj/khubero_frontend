import { useState } from "react";
import Swal from 'sweetalert2';
import {ethers} from 'ethers';
import { contractDetails } from "../blockchain/contractDetails";



const Stake = ({data, verifyTransaction, writeContractFunction, initValue}) =>{
    const [kbrToken, setKbr] = useState(),
   
    stake = async()=>{
        if(data.kbrBalance<1){
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: 'Please mint, you don`t have sufficient KBR'
            })
        }
        else{
            const stakesContract= await writeContractFunction("STAKES");
            const weiAmount = ethers.utils.parseEther(kbrToken);
             stakesContract.stakeToken(weiAmount).then((data) => {
                 setTimeout(()=>{
                     initValue();
                 }, 6000);
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
       
    },
    approve = async()=>{
        const KBRContract = await writeContractFunction('KBR');
        const stakeAddress = contractDetails.STAKES.address[4];
        const weiAmount = ethers.utils.parseEther('1000000');
        KBRContract.increaseAllowance(stakeAddress, weiAmount).then((data) => {
            setTimeout(()=>{
                initValue();
            }, 6000);
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
    console.log("data", data)

    return(
        <>
        <div className="stakeWrapper revenueWrapper">
            <h2 className="title text-center">Staking</h2>
            <div className="row">
                <div className='col-md-6'>
            <div className='revenue-form-wrapper'>
                <p>Stake</p>
                <label>KHUBERO </label>
                <input placeholder='KBR value' name="ethVal" onChange={(e)=>setKbr(e.target.value)}/>
                <br/>
             <label>Min investment >= 100 KBR </label>{}
                <label>{`Max investment <= 100000 KBR`} </label>


                
                <div className='buttonWrapper'>
                    <button onClick={stake} disabled = {data.allowance < 10} >Submit</button>
                </div>
                <br/>
                { !data.allowance &&
                     <div>
                    
                     <p>Please approve for stakes</p>
                     <div className='buttonWrapper'>
                         <button onClick={approve}>Approve</button>
                     </div>
                     </div>
                        
                    }
               
                <br/>
            </div>
                </div>
                <div className="col-md-6">
                    <div className="col-md-6">
                        <div className='box'>
                            <h3>KBR Token</h3>
                            <p>{data.kbrBalance}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <div className='box'>
                            <h3>Staked Amount</h3>
                            <p>{data.kbrBalance}</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
      
        </>
    )
}

export default Stake;