/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Floppy, FloppyInterface } from "../../contracts/Floppy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526012600a62000014919062000809565b640ba43b74006200002691906200085a565b6006553480156200003657600080fd5b506040518060400160405280600681526020017f466c6f70707900000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f464c5000000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb929190620005cc565b508060049080519060200190620000d4929190620005cc565b505050620000f7620000eb6200017160201b60201c565b6200017960201b60201c565b620001466040518060400160405280601481526020017f6f776e65723a202573206d61786361703a202573000000000000000000000000815250336006546200023f60201b620009581760201c565b6200015a33600654620002e860201b60201c565b6200016b336200046160201b60201c565b62000c54565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002e38383836040516024016200025a93929190620009b5565b6040516020818303038152906040527f0d26b925000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200057760201b60201c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200035b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003529062000a49565b60405180910390fd5b6200036f600083836200059860201b60201c565b806002600082825462000383919062000a6b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620003da919062000a6b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000441919062000ac8565b60405180910390a36200045d600083836200059d60201b60201c565b5050565b620004716200017160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000497620005a260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620004f0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004e79062000b35565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000563576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200055a9062000bcd565b60405180910390fd5b62000574816200017960201b60201c565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b505050565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b828054620005da9062000c1e565b90600052602060002090601f016020900481019282620005fe57600085556200064a565b82601f106200061957805160ff19168380011785556200064a565b828001600101855582156200064a579182015b82811115620006495782518255916020019190600101906200062c565b5b5090506200065991906200065d565b5090565b5b80821115620006785760008160009055506001016200065e565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200070a57808604811115620006e257620006e16200067c565b5b6001851615620006f25780820291505b80810290506200070285620006ab565b9450620006c2565b94509492505050565b600082620007255760019050620007f8565b81620007355760009050620007f8565b81600181146200074e576002811462000759576200078f565b6001915050620007f8565b60ff8411156200076e576200076d6200067c565b5b8360020a9150848211156200078857620007876200067c565b5b50620007f8565b5060208310610133831016604e8410600b8410161715620007c95782820a905083811115620007c357620007c26200067c565b5b620007f8565b620007d88484846001620006b8565b92509050818404811115620007f257620007f16200067c565b5b81810290505b9392505050565b6000819050919050565b60006200081682620007ff565b91506200082383620007ff565b9250620008527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000713565b905092915050565b60006200086782620007ff565b91506200087483620007ff565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620008b057620008af6200067c565b5b828202905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620008f7578082015181840152602081019050620008da565b8381111562000907576000848401525b50505050565b6000601f19601f8301169050919050565b60006200092b82620008bb565b620009378185620008c6565b935062000949818560208601620008d7565b62000954816200090d565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200098c826200095f565b9050919050565b6200099e816200097f565b82525050565b620009af81620007ff565b82525050565b60006060820190508181036000830152620009d181866200091e565b9050620009e2602083018562000993565b620009f16040830184620009a4565b949350505050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000a31601f83620008c6565b915062000a3e82620009f9565b602082019050919050565b6000602082019050818103600083015262000a648162000a22565b9050919050565b600062000a7882620007ff565b915062000a8583620007ff565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000abd5762000abc6200067c565b5b828201905092915050565b600060208201905062000adf6000830184620009a4565b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000b1d602083620008c6565b915062000b2a8262000ae5565b602082019050919050565b6000602082019050818103600083015262000b508162000b0e565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000bb5602683620008c6565b915062000bc28262000b57565b604082019050919050565b6000602082019050818103600083015262000be88162000ba6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000c3757607f821691505b6020821081141562000c4e5762000c4d62000bef565b5b50919050565b611ea18062000c646000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b6040516101259190611398565b60405180910390f35b61014860048036038101906101439190611453565b610402565b60405161015591906114ae565b60405180910390f35b610166610425565b60405161017391906114d8565b60405180910390f35b610196600480360381019061019191906114f3565b61042f565b6040516101a391906114ae565b60405180910390f35b6101b461045e565b6040516101c19190611562565b60405180910390f35b6101e460048036038101906101df9190611453565b610467565b6040516101f191906114ae565b60405180910390f35b610214600480360381019061020f9190611453565b61049e565b005b610230600480360381019061022b919061157d565b61057f565b005b61024c600480360381019061024791906115aa565b610593565b60405161025991906114d8565b60405180910390f35b61026a6105db565b005b61028660048036038101906102819190611453565b610663565b005b610290610683565b60405161029d91906115e6565b60405180910390f35b6102ae6106ad565b6040516102bb9190611398565b60405180910390f35b6102de60048036038101906102d99190611453565b61073f565b6040516102eb91906114ae565b60405180910390f35b61030e60048036038101906103099190611453565b6107b6565b60405161031b91906114ae565b60405180910390f35b61033e60048036038101906103399190611601565b6107d9565b60405161034b91906114d8565b60405180910390f35b61036e600480360381019061036991906115aa565b610860565b005b60606003805461037f90611670565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab90611670565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d6109f7565b905061041a8185856109ff565b600191505092915050565b6000600254905090565b60008061043a6109f7565b9050610447858285610bca565b610452858585610c56565b60019150509392505050565b60006012905090565b6000806104726109f7565b905061049381858561048485896107d9565b61048e91906116d1565b6109ff565b600191505092915050565b6104a66109f7565b73ffffffffffffffffffffffffffffffffffffffff166104c4610683565b73ffffffffffffffffffffffffffffffffffffffff161461051a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051190611773565b60405180910390fd5b60065481610526610425565b61053091906116d1565b1115610571576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610568906117df565b60405180910390fd5b61057b8282610ed7565b5050565b61059061058a6109f7565b82611037565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105e36109f7565b73ffffffffffffffffffffffffffffffffffffffff16610601610683565b73ffffffffffffffffffffffffffffffffffffffff1614610657576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064e90611773565b60405180910390fd5b610661600061120e565b565b6106758261066f6109f7565b83610bca565b61067f8282611037565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546106bc90611670565b80601f01602080910402602001604051908101604052809291908181526020018280546106e890611670565b80156107355780601f1061070a57610100808354040283529160200191610735565b820191906000526020600020905b81548152906001019060200180831161071857829003601f168201915b5050505050905090565b60008061074a6109f7565b9050600061075882866107d9565b90508381101561079d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079490611871565b60405180910390fd5b6107aa82868684036109ff565b60019250505092915050565b6000806107c16109f7565b90506107ce818585610c56565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6108686109f7565b73ffffffffffffffffffffffffffffffffffffffff16610886610683565b73ffffffffffffffffffffffffffffffffffffffff16146108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d390611773565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094390611903565b60405180910390fd5b6109558161120e565b50565b6109f283838360405160240161097093929190611923565b6040516020818303038152906040527f0d26b925000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112d4565b505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a66906119d3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610adf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad690611a65565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610bbd91906114d8565b60405180910390a3505050565b6000610bd684846107d9565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c505781811015610c42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3990611ad1565b60405180910390fd5b610c4f84848484036109ff565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbd90611b63565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2d90611bf5565b60405180910390fd5b610d418383836112f5565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbe90611c87565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e5a91906116d1565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ebe91906114d8565b60405180910390a3610ed18484846112fa565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3e90611cf3565b60405180910390fd5b610f53600083836112f5565b8060026000828254610f6591906116d1565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fba91906116d1565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161101f91906114d8565b60405180910390a3611033600083836112fa565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109e90611d85565b60405180910390fd5b6110b3826000836112f5565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611139576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113090611e17565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546111909190611e37565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111f591906114d8565b60405180910390a3611209836000846112fa565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561133957808201518184015260208101905061131e565b83811115611348576000848401525b50505050565b6000601f19601f8301169050919050565b600061136a826112ff565b611374818561130a565b935061138481856020860161131b565b61138d8161134e565b840191505092915050565b600060208201905081810360008301526113b2818461135f565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113ea826113bf565b9050919050565b6113fa816113df565b811461140557600080fd5b50565b600081359050611417816113f1565b92915050565b6000819050919050565b6114308161141d565b811461143b57600080fd5b50565b60008135905061144d81611427565b92915050565b6000806040838503121561146a576114696113ba565b5b600061147885828601611408565b92505060206114898582860161143e565b9150509250929050565b60008115159050919050565b6114a881611493565b82525050565b60006020820190506114c3600083018461149f565b92915050565b6114d28161141d565b82525050565b60006020820190506114ed60008301846114c9565b92915050565b60008060006060848603121561150c5761150b6113ba565b5b600061151a86828701611408565b935050602061152b86828701611408565b925050604061153c8682870161143e565b9150509250925092565b600060ff82169050919050565b61155c81611546565b82525050565b60006020820190506115776000830184611553565b92915050565b600060208284031215611593576115926113ba565b5b60006115a18482850161143e565b91505092915050565b6000602082840312156115c0576115bf6113ba565b5b60006115ce84828501611408565b91505092915050565b6115e0816113df565b82525050565b60006020820190506115fb60008301846115d7565b92915050565b60008060408385031215611618576116176113ba565b5b600061162685828601611408565b925050602061163785828601611408565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061168857607f821691505b6020821081141561169c5761169b611641565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116dc8261141d565b91506116e78361141d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561171c5761171b6116a2565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061175d60208361130a565b915061176882611727565b602082019050919050565b6000602082019050818103600083015261178c81611750565b9050919050565b7f466c6f7070793a20636170206578636565646564000000000000000000000000600082015250565b60006117c960148361130a565b91506117d482611793565b602082019050919050565b600060208201905081810360008301526117f8816117bc565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061185b60258361130a565b9150611866826117ff565b604082019050919050565b6000602082019050818103600083015261188a8161184e565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006118ed60268361130a565b91506118f882611891565b604082019050919050565b6000602082019050818103600083015261191c816118e0565b9050919050565b6000606082019050818103600083015261193d818661135f565b905061194c60208301856115d7565b61195960408301846114c9565b949350505050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006119bd60248361130a565b91506119c882611961565b604082019050919050565b600060208201905081810360008301526119ec816119b0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a4f60228361130a565b9150611a5a826119f3565b604082019050919050565b60006020820190508181036000830152611a7e81611a42565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611abb601d8361130a565b9150611ac682611a85565b602082019050919050565b60006020820190508181036000830152611aea81611aae565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611b4d60258361130a565b9150611b5882611af1565b604082019050919050565b60006020820190508181036000830152611b7c81611b40565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611bdf60238361130a565b9150611bea82611b83565b604082019050919050565b60006020820190508181036000830152611c0e81611bd2565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611c7160268361130a565b9150611c7c82611c15565b604082019050919050565b60006020820190508181036000830152611ca081611c64565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611cdd601f8361130a565b9150611ce882611ca7565b602082019050919050565b60006020820190508181036000830152611d0c81611cd0565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d6f60218361130a565b9150611d7a82611d13565b604082019050919050565b60006020820190508181036000830152611d9e81611d62565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e0160228361130a565b9150611e0c82611da5565b604082019050919050565b60006020820190508181036000830152611e3081611df4565b9050919050565b6000611e428261141d565b9150611e4d8361141d565b925082821015611e6057611e5f6116a2565b5b82820390509291505056fea2646970667358221220fe29b2d5a07332c0621e4e6b206d196a6bcc22b2d7cc44280e611c793965de0064736f6c63430008090033";

type FloppyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FloppyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Floppy__factory extends ContractFactory {
  constructor(...args: FloppyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Floppy> {
    return super.deploy(overrides || {}) as Promise<Floppy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Floppy {
    return super.attach(address) as Floppy;
  }
  override connect(signer: Signer): Floppy__factory {
    return super.connect(signer) as Floppy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FloppyInterface {
    return new utils.Interface(_abi) as FloppyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Floppy {
    return new Contract(address, _abi, signerOrProvider) as Floppy;
  }
}
