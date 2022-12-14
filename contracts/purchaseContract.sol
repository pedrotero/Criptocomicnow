pragma solidity ^0.8.6;

contract purchaseContract {

    struct Comic{
        uint idcomic;
        int price;
        string name_comic;
        string author;
        uint publish_date;
        int ISBN;
        Client owner;
    }

    struct Purchase{
        uint idpurchase;
        uint purchase_date;
        Comic item;
        Client owner;
        Client buyer;
    }

    struct Client{
        uint idclient;
        string name;
        string pass;
    }
    Comic[] public comics; 
    uint public nextidComic;
    Purchase[] public purchases;
    uint public nextIdPurchase;
    Client[] public clients;
    uint public nextIdClients;

    function createComic (int _price, string memory _name_comic, string memory _author, uint  _publish_date, int  _isbn, uint _owner_id) public{
        comics.push(Comic(nextidComic++, _price,_name_comic, _author, _publish_date, _isbn, clients[_owner_id]));
    }

    function getComic(uint id) public view returns (Comic memory) {
        return comics[id];
    }
    
    function createPurchase(uint _purchase_date, uint  _item_id, uint  _owner_id, uint  _buyer_id) public {
        purchases.push(Purchase(nextIdPurchase++, _purchase_date, comics[_item_id], clients[_owner_id], clients[_buyer_id]));
    }
    
    function createClient (string memory _name, string memory _pass) public{
        clients.push(Client(nextIdClients++, _name, _pass));
    }

    function getPurchase(uint id) public view returns (Purchase memory){
        return purchases[id];
    }

    function getClient(uint id) public view returns (Client memory){
        return clients[id];
    }


    //function
    
    
}