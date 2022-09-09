import { ethers } from 'ethers';
import { contractDetails } from '../blockchain/contractDetails';
import Swal from 'sweetalert2';



const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/b001cbdee80c4e52806e2e072e601ce4');


const getMetaMask = () => {
	const providerMetaMask = new ethers.providers.Web3Provider(window.ethereum)
	return providerMetaMask
}

const getChainId = async () => {
	const network = await provider.getNetwork()
	return network.chainId
}

const writeContractFunction = async (token) => {
	const mProviderInner = getMetaMask()
	const signer = await mProviderInner.getSigner()
	const chainId = await getChainId()
	return new ethers.Contract(
		contractDetails[token].address[chainId],
		contractDetails[token].abi,
		signer
	)
}

const readContractFunction = async (token) => {
	const chainId = await getChainId()
	return new ethers.Contract(
		contractDetails[token].address[chainId],
		contractDetails[token].abi,
		provider
	)
}



const verifyTransaction = (hash, initValue) => {
	Swal.fire({
		title: 'Sent to Blockchain',
		html: `<p>Waiting for Blockchain Confirmation...</p>
		<p><a target='_blank' href='https://rinkeby.etherscan.io/tx/${hash}'>View On Ether Scan</a> </p>`
	})
	// check transaction
	const mProviderInner = getMetaMask()
	mProviderInner.waitForTransaction(hash).then(async (result) => {
		if (result.status) {
			initValue && initValue()
			Swal.fire({
				icon: 'success',
				html: `<p>Transaction Successful</p>
		<p><a target='_blank' href='https://rinkeby.etherscan.io/tx/${hash}'>View On Ether Scan</a> </p>`
			})

			
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				html: `<p>Transaction failed!</p>
		<p><a target='_blank' href='https://rinkeby.etherscan.io/tx/${hash}'>View On Ether Scan</a> </p>`
			})
		}
	})
}

const getAddress = async () => {
	let provider = null
		if (typeof window.ethereum !== 'undefined') {
			provider = new ethers.providers.Web3Provider(window.ethereum)
		}
		const signer = await provider.getSigner()

		const address = await signer.getAddress();
		//console.log("address", address);
		return address;
}


	
	const loginMetaMask = async() =>{
		//console.log("going to login metamask")
		await window.ethereum.enable();
		try{
	
			let provider = null
			if (typeof window.ethereum !== 'undefined') {
				provider = new ethers.providers.Web3Provider(window.ethereum)
			}
			const signer = await provider.getSigner()
	
			const address = await signer.getAddress();
			//console.log("address", address);
			if(address){
				return address
			}
		}catch(error){
			return false
		}
	}

loginMetaMask()

export {writeContractFunction, readContractFunction, verifyTransaction, getAddress, getMetaMask, loginMetaMask};