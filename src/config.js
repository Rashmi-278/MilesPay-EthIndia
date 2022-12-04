export const contractAddress = "0x1d442d78e3b6b3e85d4D7c3e482115BCd3eF8678"
export const EscrowFactoryAddress = "0xB8fa5247544ed3DBd24627A0D6Fb2d53a785134a"
export const contractAbi = {
  "abi": [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "callFactory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "metaDataURI",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "shipingFee",
				"type": "uint256"
			},
			{
				"internalType": "address[4]",
				"name": "approverAdd",
				"type": "address[4]"
			}
		],
		"name": "createInvoiceToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "milestoneID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "shipingFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "invoiceID",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isOkay",
				"type": "bool"
			}
		],
		"name": "createMilestoneTransaction",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchInvoices",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "invoiceID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "shipingFee",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "invoiceOwner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "escrowContractAddress",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isCompleted",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "timeStamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "pdfURI",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "approverAddress",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "approveTimeStamp",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "atWhichMilestone",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "transactionHash",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isOkay",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "isDone",
								"type": "bool"
							}
						],
						"internalType": "struct Invoice.milestoneData[4]",
						"name": "milestoneArray",
						"type": "tuple[4]"
					}
				],
				"internalType": "struct Invoice.InvoiceNFT[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "invoiceID",
				"type": "uint256"
			}
		],
		"name": "fetchSingleInvoice",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "invoiceID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "shipingFee",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "invoiceOwner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "escrowContractAddress",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isCompleted",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "timeStamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "pdfURI",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "approverAddress",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "approveTimeStamp",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "atWhichMilestone",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "transactionHash",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isOkay",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "isDone",
								"type": "bool"
							}
						],
						"internalType": "struct Invoice.milestoneData[4]",
						"name": "milestoneArray",
						"type": "tuple[4]"
					}
				],
				"internalType": "struct Invoice.InvoiceNFT",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "invoiceID",
				"type": "uint256"
			}
		],
		"name": "getCurrentStatusOfInvoice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "approverAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "approveTimeStamp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "atWhichMilestone",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "transactionHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isOkay",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isDone",
						"type": "bool"
					}
				],
				"internalType": "struct Invoice.milestoneData[4]",
				"name": "",
				"type": "tuple[4]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "invoiceID",
				"type": "uint256"
			}
		],
		"name": "getEscrowContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "pdfURI",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "invoiceID",
				"type": "uint256"
			}
		],
		"name": "setPdfURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "transactionHash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "invoiceID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "milestoneID",
				"type": "uint256"
			}
		],
		"name": "setTxHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
}
