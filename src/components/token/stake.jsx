import { useState } from "react";
import Swal from 'sweetalert2';
import {ethers} from 'ethers';
import { contractDetails } from "../blockchain/contractDetails";
import ContentTitle from "../contentTitle";
import { Col, Row } from "react-bootstrap";



const Stake = ({data, verifyTransaction, writeContractFunction, initValue}) =>{
    const [kbrToken, setKbr] = useState(),
   
    stake = async()=>{
        if(data.kbrBalance<0.1){
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
               
                 data && data.hash && verifyTransaction(data.hash, initValue)
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
           
            data && data.hash && verifyTransaction(data.hash, initValue)
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
    },
    withdrawReward = async() =>{
        const stakeContract = await writeContractFunction('STAKES');
        stakeContract.withdrawReward().then((data) => {
           
            data && data.hash && verifyTransaction(data.hash)
        })
        .catch((error) => {
            console.log("error in reward", error)
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
        <>
        <div className="stakeWrapper padding-inline"> {/* revenueWrapper */}
            {/* <h2 className="title text-center">Staking</h2> */}
            <div className="text-center py-5"><ContentTitle title='Staking' /></div>

            <Row className="g-5">
                <Col xl='6'>
                    <div className='revenue-form-wrapper'>
                        {/* <p>Stake</p> */}
                        <ContentTitle title='Stake' />
                        <label className="custom-label">KHUBERO </label>
                        <input className="token-input" placeholder='KBR value' name="ethVal" onChange={(e)=>setKbr(e.target.value)}/>
                        <br/>
                        <div className="d-flex align-items-center justify-content-between">
                            <label className="info-text text-secondary">Min investment >= 1 KBR </label>
                            <label className="info-text text-end text-secondary">{`Max investment <= 100KBR`} </label>
                        </div>


                        
                        <div className='buttonWrapper'>
                            <button onClick={stake} disabled = {data.allowance < 10} >Submit</button>
                        </div>
                        <br/>
                        { !data.allowance &&
                            <div>
                            
                            <ContentTitle title='Please approve for stakes' />
                            <div className='buttonWrapper'>
                                <button onClick={approve}>Approve</button>
                            </div>
                            </div>
                                
                            }
                    
                        <br/>
                    </div>
                </Col>
                <Col xl='6'>
                    <Row className="g-5">
                        <Col md='6'>
                            <div className='box'>
                                <h3>KBR Token</h3>
                                <p>{data.kbrBalance}</p>
                            </div>
                        </Col>
                        {/* <Col md='6'>
                            <div className='box'>
                                <h3>Total Staked Token</h3>
                                <p>{data.totalStakedAmount}</p>
                            </div>
                        </Col> */}
                        <Col>
                            <div className="d-flex justify-content-center">
                                <div className='buttonWrapper mt-0'>
                                    <button onClick={withdrawReward}> Withdraw Reward</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
      
        </>
    )
}

export default Stake;