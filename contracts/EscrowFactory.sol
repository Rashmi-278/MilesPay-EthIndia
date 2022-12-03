// SPDX-License-Identifier: MIT

import "./Escrow.sol";

pragma solidity ^0.8.4;

contract ContractFactory {

    // Escrow[] public EscrowContractArray;

    // will  be called by the invoice
    function createEscrowContract() external returns(address){
        Escrow newEscrow = new Escrow();
        // EscrowContractArray.push(newEscrow);
        return address(newEscrow);
    }

}
