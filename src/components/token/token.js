import { useEffect, useState } from 'react';
import {writeContractFunction, readContractFunction, verifyTransaction, getAddress, getMetaMask, loginMetaMask} from './util';
import {ethers} from 'ethers';
import Swal from 'sweetalert2';
import Stake from './stake';
import Admin from './admin';
import { contractDetails } from '../blockchain/contractDetails';
import { Col, Row } from 'react-bootstrap';
import ContentTitle from '../contentTitle';

const TokenPage = () =>{
    const [data, setData] = useState({});
    const [ethvalue, setEthValue] = useState();
    const [stakesContract, setStakesContract] = useState();
    const initValue =  async()=>{
        const userAddress = await loginMetaMask();

        const KBRContract = await readContractFunction('KBR');
        const stakesContract = await readContractFunction('STAKES');
        setStakesContract(stakesContract);
        const owner = await KBRContract.owner();
        const totalSupply = ethers.utils.formatEther(await KBRContract.totalSupply());
        const investmentCap = ethers.utils.formatEther(await KBRContract.investmentCap());
        const exchangeRate = ethers.utils.formatEther(await KBRContract.exchangeRate());
        const fee = ethers.utils.formatEther(await KBRContract.feePercentage())*100;
        const minInvestment =  ethers.utils.formatEther(await KBRContract.minInvestment());
        const kbrBalance =  ethers.utils.formatEther(await KBRContract.balanceOf(userAddress));
        console.log("stake addres", contractDetails.STAKES.address[4]);
        const stakeAddress = contractDetails.STAKES.address[4];
        const allowance = await KBRContract.allowance(userAddress, stakeAddress);
        const totalStakedAmount = ethers.utils.formatEther(await stakesContract.getTotalStakeAmount());
        // console.log("await stakesContract.getTotalStakeAmount()", await stakesContract.getTotalStakeAmount())

        // console.log("await stakesContract.getTotalStakeAmount()", await stakesContract.getStakeInfo(userAddress, 1))
        setData({...data, owner, totalSupply, investmentCap, exchangeRate,fee,minInvestment, allowance: Number(allowance), kbrBalance, totalStakedAmount});

        console.log("stakesContract",stakesContract);
        //0x75E0538B84a84625e6E75AcF1e61d0B816098A95,1000000000000000000,1000000000,100000000000000000,2
    }
     useEffect(()=>{
       
        initValue();
    }, [])
    const onChange = (e) =>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
    const mint = async() =>{
        if(ethvalue && (ethvalue > data.minInvestment || ethvalue == data.minInvestment)){
            Swal.fire({
                title: 'Confirm',
                text: 'Waiting for Metamask Confirmation..'
            })
            const KBRContract = await writeContractFunction('KBR');
            const weiAmount = ethers.utils.parseEther(ethvalue);
            const address = await getAddress()

            //const gasLimit = await KBRContract.estimateGas.mint(address, 0, { value: weiAmount })
            const mProvider = getMetaMask()
	        const gasPrice = await mProvider.getGasPrice()
            KBRContract.mint({
				value: weiAmount,
			}).then((data) => {
				data && data.hash && verifyTransaction(data.hash)
			})
			.catch((error) => {
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
    return (
      <>
        <Row className="g-5 revenueWrapper padding-block padding-inline">
          <Col xl={6}>
            <Row className="g-xl-5 g-4">
              <Col xl={6} md={4}>
                <div className="box">
                  <h3>ERC20 Token</h3>
                  <p>KhuberoToken(KBR)</p>
                </div>
              </Col>
              <Col xl={6} md="4">
                <div className="box">
                  <h3>Owner</h3>
                  <p>
                    {data.owner
                      ? `0x...${data.owner.substr(data.owner.length - 5)}`
                      : ""}{" "}
                  </p>
                </div>
              </Col>
              <Col xl={6} md="4">
                <div className="box">
                  <h3>Total Supply</h3>
                  <p>{data.totalSupply}</p>
                </div>
              </Col>
              <Col xl={6} md="4">
                <div className="box">
                  <h3>investment Cap</h3>
                  <p>{data.investmentCap} ETH</p>
                </div>
              </Col>
              <Col xl={6} md={4}>
                <div className="box">
                  <h3>Exchange Rate</h3>
                  <p>{data.exchangeRate}</p>
                </div>
              </Col>
              <Col xl={6} md="4">
                <div className="box">
                  <h3>Fee</h3>
                  <p>{data.fee}%</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6}>
            <div className="revenue-form-wrapper">
              {/* <p className=''>Mint</p> */}
              <ContentTitle title="Mint" />
              <label className="custom-label">ETH </label>
              <input
                className="token-input"
                placeholder="ETH value"
                name="ethVal"
                onChange={(e) => {
                  setEthValue(e.target.value);
                }}
              />
              <br />
              {data.minInvestment && (
                <label className="custom-label">
                  Min investment >={data.minInvestment} Ether
                </label>
              )}

              <div className="buttonWrapper">
                <button className='form-btn' onClick={mint}>Submit</button>
              </div>
              <br />
              <label className="custom-label">Get Balance </label>
              <input
                className="token-input"
                placeholder="Enter Address"
                name="ethAddress"
                onChange={onChange}
              />
              {data.tokenBal && <label>{data.tokenBal} KBR</label>}
              <div className="buttonWrapper">
                <button className='form-btn' onClick={getBal}>Get</button>
              </div>
            </div>
          </Col>
        </Row>
        <Stake
          initValue={initValue}
          data={data}
          setData={setData}
          stakesContract={stakesContract}
          verifyTransaction={verifyTransaction}
          writeContractFunction={writeContractFunction}
        />
        <Admin
          initValue={initValue}
          data={data}
          setData={setData}
          stakesContract={stakesContract}
          verifyTransaction={verifyTransaction}
          writeContractFunction={writeContractFunction}
        />
      </>
    );
}

export default TokenPage;