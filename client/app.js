App = {
    init: () => {
        console.log("Loaded")
        App.loadEthereum()
        App.loadContracts()
    },

    loadEthereum: async () => {
        if (window.ethereum) {
            App.web3Provider = window.ethereum
            await window.ethereum.request({method: 'eth_requestAccounts'})
        } else{
            console.log("instala el metamask pa")
        }
    },

    loadContracts: async () => {
        const res = await fetch("purchaseContract.json")
        const purchaseContractJSON = await res.json()
        console.log(purchaseContractJSON)
    }
}

App.init()