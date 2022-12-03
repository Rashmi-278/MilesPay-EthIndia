// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Escrow {
    // add a receive function
    address shipingCompanyAddress = 0x22b6Dd4D6d818e2Ebce3D2E009A249F8FbF4e965;

    function sendAmount(uint amount) public payable {
        payable(shipingCompanyAddress).transfer(amount);
    }
}

contract Invoice is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _InvoiceIds; // total number of invoice-NFTs

    //DHL will mint the invoice NFTs so it will be the owner
    address payable owner;

    constructor() ERC721("Invoice NFT", "INVNFT"){
      owner = payable(msg.sender); // ex:- only dhl  can create the invoice
    }

    modifier onlyOwner {
       require(msg.sender == owner,"Not owner");
       _;
    }

    struct milestoneData {
        address approverAddress;
        uint256 approveTimeStamp;
        uint256 atWhichMilestone;
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
        /*------Metadata------*/ // static data , maybe u have to create another URI me packa all the metaDataURI
        // string fromDataURI;
        // string toDataURI;
        // string itemDataURI;
        /*-------------------*/

        uint timeStamp; // timestamp when the lastPayment is received
        string pdfURI;

        // this field will be updated after the contract is minted
        // mapping(uint256 => milestoneData) milestoneMapping; // will have only 4 milestone for demo.
        // string[] milestoneTxnHash; //
        milestoneData[4] milestoneArray;

    }

    mapping(uint256 => InvoiceNFT) idToInvoiceNFT;


    // this function will create invoice nft and will return the invoice ID (NFT token ID basically)
    function createInvoiceToken(
        string memory metaDataURI,
        uint256 shipingFee,
        address[4] memory approverAdd //
    ) public payable onlyOwner returns(uint256){

        // creat an escrow account for this nft invoice
        Escrow  newContract = new Escrow();
        address newContractAdddress = address(newContract);

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

        createInvoice(newInvoiceId, shipingFee, newContractAdddress);

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

    function getEscrowContractAddress(uint256 invoiceID) public view returns(address){
      InvoiceNFT storage currentNFT = idToInvoiceNFT[invoiceID];
      return currentNFT.escrowContractAddress;
    }

    // will receie the approver address as an array and then will map it
    // function mapApproverWithMilestones(address[4] memory appovers) public {
    //     for(uint i=0; i<4; i++){
    //         idToMilestone[i].approverAddress = appovers[0];
    //     }
    // }

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
      // 10% 30% 50% and 100% at milestone 1,2,3 and 4 respectively
      // handle percentage in bips
      // create an event for this transaction
      InvoiceNFT storage currentNFT = idToInvoiceNFT[invoiceID];

      require(!(currentNFT.isCompleted),"Final invoice is already generated.");
      uint256 firstPaymentAmount;
      uint256 secondPaymentAmount;
      uint256 thirdPaymentAmount;
      uint256 lastPaymentAmount;
      // create a pointer


      // checkpoint 1
      if(milestoneID == 1){
        require(msg.sender == currentNFT.milestoneArray[0].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[0].isOkay = isOkay;
        address escrowAddr = currentNFT.escrowContractAddress;

        if( currentNFT.milestoneArray[0].isOkay==true){
            // call the escrow contract and transfer  the ammount
           currentNFT.milestoneArray[0].atWhichMilestone=1;
           firstPaymentAmount = (shipingFee/10000)*10000; // (10 * 100, as we are dealing in bips)
           currentNFT.milestoneArray[0].amount = firstPaymentAmount;
           Escrow newEscrow = Escrow(escrowAddr);
           newEscrow.sendAmount(firstPaymentAmount);
           currentNFT.milestoneArray[0].approveTimeStamp = block.timestamp;
           currentNFT.milestoneArray[0].isDone = true;
        }

      }
      // checkpoint 2
      if(milestoneID == 2){
        require(msg.sender == currentNFT.milestoneArray[1].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[1].isOkay = isOkay;
        address escrowAddr = currentNFT.escrowContractAddress;

        if( currentNFT.milestoneArray[1].isOkay==true){
            // call the escrow contract and transfer  the ammount
           currentNFT.milestoneArray[1].atWhichMilestone=2;
           secondPaymentAmount = ((shipingFee/30000)*10000) - firstPaymentAmount; // (30 * 100, as we are dealing in bips)
           currentNFT.milestoneArray[1].amount = secondPaymentAmount;
           Escrow newEscrow = Escrow(escrowAddr);
           newEscrow.sendAmount(secondPaymentAmount);
           currentNFT.milestoneArray[1].approveTimeStamp = block.timestamp;
           currentNFT.milestoneArray[1].isDone = true;
        }
      }
      // checkpoint 3
      if(milestoneID == 3){
        require(msg.sender == currentNFT.milestoneArray[2].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[2].isOkay = isOkay;
        address escrowAddr = currentNFT.escrowContractAddress;

        if( currentNFT.milestoneArray[2].isOkay==true){
            // call the escrow contract and transfer  the ammount
           currentNFT.milestoneArray[2].atWhichMilestone=3;
           secondPaymentAmount = ((shipingFee/50000)*10000) - secondPaymentAmount; // (50 * 100, as we are dealing in bips)
           currentNFT.milestoneArray[2].amount = thirdPaymentAmount;
           Escrow newEscrow = Escrow(escrowAddr);
           newEscrow.sendAmount(thirdPaymentAmount);
           currentNFT.milestoneArray[2].approveTimeStamp = block.timestamp;
           currentNFT.milestoneArray[2].isDone = true;

        }
      }
      // checkpoint 4
      if(milestoneID == 4){
        require(msg.sender == currentNFT.milestoneArray[3].approverAddress ,"address is not approver.");
        // do the transaction
        currentNFT.milestoneArray[3].isOkay = isOkay;
        address escrowAddr = currentNFT.escrowContractAddress;

        if( currentNFT.milestoneArray[3].isOkay==true){
            // call the escrow contract and transfer  the ammount
           currentNFT.milestoneArray[2].atWhichMilestone=4;
           lastPaymentAmount = currentNFT.shipingFee - (firstPaymentAmount+secondPaymentAmount+thirdPaymentAmount);
           currentNFT.milestoneArray[3].amount = lastPaymentAmount;
           Escrow newEscrow = Escrow(escrowAddr);
           newEscrow.sendAmount(lastPaymentAmount);
           currentNFT.milestoneArray[3].approveTimeStamp = block.timestamp;
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
