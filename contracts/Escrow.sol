// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


contract Escrow {
    // add a receive function
    address shipingCompanyAddress = 0x22b6Dd4D6d818e2Ebce3D2E009A249F8FbF4e965;

    // 10% 10% 10% at milestone 1,2,3 and 4 respectively
    // handle percentage in bips
    uint256 firstPaymentAmount = (address(this).balance/10000)*10000;
    uint256 secondPaymentAmount = ((address(this).balance/10000)*10000) - firstPaymentAmount;
    uint256 thirdPaymentAmount =  ((address(this).balance/10000)*10000) - secondPaymentAmount;
    uint256 lastPaymentAmount = address(this).balance - (firstPaymentAmount+secondPaymentAmount);

    function sendAmount(address approver) public {
        if(approver==0x962D7832934d77b925a9EE3274b81A86C183EE05){
            payable(shipingCompanyAddress).transfer(firstPaymentAmount);
        }
        if(approver==0xa716eBb89e78f909001C2CC49d740BeCA028AbB5){
            payable(shipingCompanyAddress).transfer(secondPaymentAmount);
        }
        if(approver==0xDf4B4E74700644b68c0926Ae20950ED0f55A38Af){
            payable(shipingCompanyAddress).transfer(thirdPaymentAmount);
        }
        if(approver==0xd1BBF1292f759B5C75b9b0cC2Deae89BD9408Cb7){
            payable(shipingCompanyAddress).transfer(lastPaymentAmount);
        }
    }
}
