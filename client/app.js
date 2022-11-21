App = {
    contracts: {},
    init: async () => {
        console.log("Loaded")
        await App.loadWeb3();
        await App.loadContracts()
    },

    loadWeb3: async () => {
        if (window.ethereum) {
          App.web3Provider = window.ethereum;
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } else if (web3) {
          web3 = new Web3(window.web3.currentProvider);
        } else {
          console.log(
            "No ethereum browser is installed. Try it installing MetaMask "
          );
        }
    },
    loadAccount: async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        App.account = accounts[0];
      },

    loadContracts: async () => {
        const res = await fetch("purchaseContract.json")
        const purchaseContractJSON = await res.json()
        
        App.contracts.purchaseContract = TruffleContract(purchaseContractJSON)

        App.contracts.purchaseContract.setProvider(App.web3Provider)

        App.purchaseContract = await App.contracts.purchaseContract.deployed()
    },

    createUser: async(name, pass) => {
        var result = await App.purchaseContract.createUser(name, pass)
    }
}