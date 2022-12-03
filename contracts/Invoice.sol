// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// this will call contractFactory functions

interface ContractFactory {
    function createEscrowContract() external pure returns(address);
}

contract Invoice is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _InvoiceIds; // total number of invoice-NFTs


    address payable owner;
    address factoryContractAddress;

    constructor() ERC721("Invoice NFT", "INVNFT"){
      owner = payable(msg.sender); // ex:- only dhl  can create the invoice
      factoryContractAddress = "someAddress";
    }

    modifier onlyOwner {
       require(msg.sender == owner,"Not owner");
       _;
    }

    struct milestoneData {
        address approverAddress;
        uint256 approveTimeStamp;
        uint256 atWhichMilestone; // milestone id
        string transactionHash;
        uint256 amount; // transaction amount at that milestone
        bool isOkay; // for verification
        bool isDone;
    }

    // mapping(uint256 => milestoneData) idToMilestone;

    struct InvoiceNFT {

        uint256 invoiceID;
        uint256 shipingFee;
        address payable invoiceOwner;
        address escrowContractAddress;
        bool isCompleted;

        uint timeStamp; // timestamp when the lastPayment is received
        string pdfURI;

        milestoneData[4] milestoneArray;

    }

    mapping(uint256 => InvoiceNFT) idToInvoiceNFT;


    // this function will create invoice nft and will return the invoice ID (NFT token ID basically)
    function createInvoiceToken(
        string memory metaDataURI,
        uint256 shipingFee,
        address[4] memory approverAdd //
    ) public payable onlyOwner returns(uint256){

        // create an escrow account for this nft invoice
        address escrowContractAdddress = callFactory(factoryContractAddress);

        // require(newContractAdddress.balance > shipingFee,"Not enough balance");

        _InvoiceIds.increment();
        uint256 newInvoiceId = _InvoiceIds.current();

        _mint(msg.sender, newInvoiceId);
        _setTokenURI(newInvoiceId, metaDataURI);


       // will set the approver addresses
       // using index for id
        for(uint i=0; i<4; i++){
            idToInvoiceNFT[newInvoiceId].milestoneArray[i].approverAddress = approverAdd[i];
        }

        // mapApproverWithMilestones(approverAdd);

        createInvoice(newInvoiceId, shipingFee, escrowContractAdddress);

        return newInvoiceId;
    }

    function createInvoice(
      uint256 invoiceID,
      uint256 shipingFee,
      address escrowContractAddress
    ) private {
      require(shipingFee > 0, "shipingFee is zero.");
      idToInvoiceNFT[invoiceID].invoiceID = invoiceID;
      idToInvoiceNFT[invoiceID].shipingFee = shipingFee;
      idToInvoiceNFT[invoiceID].timeStamp = block.timestamp;
      idToInvoiceNFT[invoiceID].escrowContractAddress = escrowContractAddress;
      idToInvoiceNFT[invoiceID].invoiceOwner = owner;
    }


    // function to call escrow factory contract
    function callFactory(address addr) public returns(address){
        ContractFactory prototype =  ContractFactory(addr);
        return prototype.createEscrowContract();
    }

    // ex: for hyundai
    function getEscrowContractAddress(uint256 invoiceID) public view returns(address){
      InvoiceNFT storage currentNFT = idToInvoiceNFT[invoiceID];
      return currentNFT.escrowContractAddress;
    }

    function fetchInvoices() public view returns(InvoiceNFT[] memory) {
      uint256 invoiceCount = _InvoiceIds.current();
      uint256 currentIndex = 0; // this is for looping

      InvoiceNFT[] memory allInvoices = new InvoiceNFT[](invoiceCount);

      for(uint i=0; i<invoiceCount; i++){
        uint currentId = i+1; // to start from 1
        InvoiceNFT storage currentInvoice = idToInvoiceNFT[currentId];
        allInvoices[currentIndex] = currentInvoice;
        currentIndex++;
      }
      return allInvoices;
    }

    // dynamic part of the contract
    function createMilestoneTransaction(uint256 milestoneID, uint256 shipingFee, uint256 invoiceID, bool isOkay) public payable {

      InvoiceNFT storage currentNFT = idToInvoiceNFT[invoiceID];

      require(!(currentNFT.isCompleted),"Final invoice is already generated.");



      // checkpoint 1
      if(milestoneID == 1){
        require(msg.sender == currentNFT.milestoneArray[0].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[0].isOkay = isOkay;

        if( currentNFT.milestoneArray[0].isOkay==true){
           currentNFT.milestoneArray[0].atWhichMilestone=1;
        //  currentNFT.milestoneArray[0].amount = firstPaymentAmount;
           currentNFT.milestoneArray[0].approveTimeStamp = block.timestamp;
           address escAddress = currentNFT.escrowContractAddress;
           (bool success,) = escAddress.call(abi.encodeWithSignature("sendAmount(address)", currentNFT.milestoneArray[0].approverAddress));
           currentNFT.milestoneArray[0].isDone = true;
        }

      }
      // checkpoint 2
      if(milestoneID == 2){
        require(msg.sender == currentNFT.milestoneArray[1].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[1].isOkay = isOkay;

        if( currentNFT.milestoneArray[1].isOkay==true){
           currentNFT.milestoneArray[1].atWhichMilestone=2;
        //    currentNFT.milestoneArray[1].amount = secondPaymentAmount;
           currentNFT.milestoneArray[1].approveTimeStamp = block.timestamp;
           address escAddress = currentNFT.escrowContractAddress;
           (bool success,) = escAddress.call(abi.encodeWithSignature("sendAmount(address)", currentNFT.milestoneArray[1].approverAddress));
           currentNFT.milestoneArray[1].isDone = true;
        }
      }
      // checkpoint 3
      if(milestoneID == 3){
        require(msg.sender == currentNFT.milestoneArray[2].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[2].isOkay = isOkay;

        if( currentNFT.milestoneArray[2].isOkay==true){
            // call the escrow contract and transfer  the ammount
           currentNFT.milestoneArray[2].atWhichMilestone=3;
        //    currentNFT.milestoneArray[2].amount = thirdPaymentAmount;
           currentNFT.milestoneArray[2].approveTimeStamp = block.timestamp;
           address escAddress = currentNFT.escrowContractAddress;
           (bool success,) = escAddress.call(abi.encodeWithSignature("sendAmount(address)", currentNFT.milestoneArray[2].approverAddress));
           currentNFT.milestoneArray[2].isDone = true;
        }
      }
      // checkpoint 4
      if(milestoneID == 4){
        require(msg.sender == currentNFT.milestoneArray[3].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[3].isOkay = isOkay;

        if( currentNFT.milestoneArray[3].isOkay==true){
            // call the escrow contract and transfer  the ammount
           currentNFT.milestoneArray[3].atWhichMilestone=4;
           currentNFT.milestoneArray[3].approveTimeStamp = block.timestamp;
           address escAddress = currentNFT.escrowContractAddress;
           (bool success,) = escAddress.call(abi.encodeWithSignature("sendAmount(address)", currentNFT.milestoneArray[3].approverAddress));
           currentNFT.timeStamp = block.timestamp;
           currentNFT.milestoneArray[3].isDone = true;
           currentNFT.isCompleted = true;
        }
      }
    }

    // will attach the uri of pdf to the inovoice nft
    function setPdfURI(string memory pdfURI, uint256 invoiceID) public {
      InvoiceNFT storage currentNFT = idToInvoiceNFT[invoiceID];
      require(!(currentNFT.isCompleted),"Final invoice is already generated.");
      currentNFT.pdfURI = pdfURI;
    }

    // function to fetch single Invoice using invoiceID, and this will be completed bill/receipt
    function fetchSingleInvoice(uint256 invoiceID) public view returns(InvoiceNFT memory){
      InvoiceNFT storage targetInvoice = idToInvoiceNFT[invoiceID];
      require(targetInvoice.isCompleted!=true,"Invoice is not fully completed.");
      return targetInvoice;
    }

    // this will update the transaction hash
    function setTxHash(string memory transactionHash, uint256 invoiceID, uint256 milestoneID) public {
      InvoiceNFT storage currentNFT = idToInvoiceNFT[invoiceID];
      currentNFT.milestoneArray[milestoneID].transactionHash = transactionHash;
    }

    // function to get current status of the invoice, function returns a tupple
    function getCurrentStatusOfInvoice(uint256 invoiceID) public view returns(
      uint256, // invoiceId
      uint256, //shiping fee
      address, // escrowAddressAccount
      bool, // isCompleted
      milestoneData[4] memory // milestone metadata
    ){
      InvoiceNFT storage targetInvoice = idToInvoiceNFT[invoiceID];
      return(
        targetInvoice.invoiceID,
        targetInvoice.shipingFee,
        targetInvoice.escrowContractAddress,
        targetInvoice.isCompleted,
        targetInvoice.milestoneArray
      );
    }
}
