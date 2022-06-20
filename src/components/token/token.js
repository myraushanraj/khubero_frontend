import { useEffect, useState } from 'react';
import {writeContractFunction, readContractFunction, verifyTransaction, getAddress, getMetaMask, loginMetaMask} from './util';
import {ethers} from 'ethers';
import Swal from 'sweetalert2';

const TokenPage = () =>{
    const [data, setData] = useState({});
    const [ethvalue, setEthValue] = useState();

     useEffect(()=>{
        (async()=>{
            const userAddress = await loginMetaMask();
            const KBRContract = await readContractFunction('KBR');
            const owner = await KBRContract.owner();
            const totalSupply = ethers.utils.formatEther(await KBRContract.totalSupply());
            const investmentCap = ethers.utils.formatEther(await KBRContract.investmentCap());
            const exchangeRate = ethers.utils.formatEther(await KBRContract.exchangeRate());
            const fee = ethers.utils.formatEther(await KBRContract.feePercentage())*100;
            setData({...data, owner, totalSupply, investmentCap, exchangeRate,fee, userAddress});

           // console.log("KBR", owner, KBRContract, investmentCap, exchangeRate);
        })()
    }, [])
    const onChange = (e) =>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
    const mint = async() =>{
        if(ethvalue && (ethvalue > 1|| ethvalue == 1)){
            Swal.fire({
                title: 'Confirm',
                text: 'Waiting for Metamask Confirmation..'
            })
            const KBRContract = await writeContractFunction('KBR');
            const weiAmount = ethers.utils.parseEther(ethvalue);
            console.log("weiAmount", weiAmount);
            const address = await getAddress()

            //const gasLimit = await KBRContract.estimateGas.mint(address, 0, { value: weiAmount })
            const mProvider = getMetaMask()
	        const gasPrice = await mProvider.getGasPrice()
            KBRContract.mint({
				value: weiAmount,
				// gasPrice: gasPrice,
				// gasLimit: Number(gasLimit) + 1000
			}).then((data) => {
				data && data.hash && verifyTransaction(data.hash)
			})
			.catch((error) => {
                console.log("error", error);
				if (error.code === 4001) {
					return Swal('User denied transaction.')
				}else{
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!'
					})
				}
				
				// dispatch(metamaskError(error))
			})

        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Eth value should be equal to or greater than 1'
            })
        }
       
    }
    const getBal = async() =>{
        setData({...data, tokenBal:"wait..."})
        if(ethers.utils.isAddress(data.ethAddress) && data.ethAddress){
            const KBRContract = await readContractFunction('KBR');
            const tokenBal = ethers.utils.formatEther(await KBRContract.balanceOf(data.ethAddress));
            setData({...data, tokenBal})
        }
        else{
            setData({...data,tokenBal: ""})
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid address!'
            })
        }
        
    }
    return(
        <div className='row revenueWrapper'>
        <div className='col-md-6'>
            <div className='col-md-6'>
                <div className='box'>
                    <h3>ERC20 Token</h3>
                    <p>KhuberoToken(KBR)</p>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='box'>
                    <h3>Owner</h3>
                    <p>{ data.owner ? `0x...${data.owner.substr(data.owner.length - 5)}` : ''  } </p>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='box'>
                    <h3>Total Supply</h3>
                    <p>{data.totalSupply}</p>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='box'>
                    <h3>investment Cap</h3>
                    <p>{data.investmentCap} ETH</p>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='box'>
                    <h3>Exchange Rate</h3>
                    <p>{data.exchangeRate}</p>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='box'>
                    <h3>Fee</h3>
                    <p>{data.fee}%</p>
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='revenue-form-wrapper'>
                <p>Mint</p>
                <label>ETH </label>
                <input placeholder='ETH value' name="ethVal"  onChange = {(e)=>{setEthValue(e.target.value)}}/>
                <br/>
                <label>Min investment >=1 Ether</label>

                
                <div className='buttonWrapper'>
                    <button onClick={mint}>Submit</button>
                </div>
                <br/>
                <label>Get Balance </label>
                <input placeholder='Enter Address' name="ethAddress" onChange = {onChange} />
                {data.tokenBal && <label>{data.tokenBal} KBR</label>}
                <div className='buttonWrapper'>
                    <button onClick={getBal}>Get</button>
                </div>
            </div>
        </div>
    </div>

    )
}

export default TokenPage;