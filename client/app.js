App = {
    contracts: {},
    init: async () => {
        console.log("Loaded")
        await App.loadWeb3();
        await App.loadContracts()
        await App.loadAccount()
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
        console.log(App.account);
      },

    loadContracts: async () => {
        const res = await fetch("purchaseContract.json")
        const purchaseContractJSON = await res.json()
        
        App.contracts.purchaseContract = TruffleContract(purchaseContractJSON)

        App.contracts.purchaseContract.setProvider(App.web3Provider)

        App.purchaseContract = await App.contracts.purchaseContract.deployed()
    },

    createClient: async(name, pass) => {
        try {
            const result = await App.purchaseContract.createClient(name, pass, {
              from: App.account,
            });
            console.log(result.logs[0].args);
            window.location.reload();
          } catch (error) {
            console.error(error);
          }
    }
}