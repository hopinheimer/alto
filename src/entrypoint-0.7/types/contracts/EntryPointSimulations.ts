export const EntryPointSimulationsAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool"
            },
            {
                internalType: "bytes",
                name: "ret",
                type: "bytes"
            }
        ],
        name: "DelegateAndRevert",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "opIndex",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "reason",
                type: "string"
            }
        ],
        name: "FailedOp",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "opIndex",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "reason",
                type: "string"
            },
            {
                internalType: "bytes",
                name: "inner",
                type: "bytes"
            }
        ],
        name: "FailedOpWithRevert",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "returnData",
                type: "bytes"
            }
        ],
        name: "PostOpReverted",
        type: "error"
    },
    {
        inputs: [],
        name: "ReentrancyGuardReentrantCall",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "SenderAddressResult",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "aggregator",
                type: "address"
            }
        ],
        name: "SignatureValidationFailed",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "targetSuccess",
                type: "bool"
            },
            {
                internalType: "bytes",
                name: "targetResult",
                type: "bytes"
            }
        ],
        name: "TargetCallResult",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "factory",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "paymaster",
                type: "address"
            }
        ],
        name: "AccountDeployed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "BeforeExecution",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalDeposit",
                type: "uint256"
            }
        ],
        name: "Deposited",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "revertReason",
                type: "bytes"
            }
        ],
        name: "PostOpRevertReason",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "aggregator",
                type: "address"
            }
        ],
        name: "SignatureAggregatorChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalStaked",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256"
            }
        ],
        name: "StakeLocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "withdrawTime",
                type: "uint256"
            }
        ],
        name: "StakeUnlocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "StakeWithdrawn",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "paymaster",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "success",
                type: "bool"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualGasUsed",
                type: "uint256"
            }
        ],
        name: "UserOperationEvent",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            }
        ],
        name: "UserOperationPrefundTooLow",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "revertReason",
                type: "bytes"
            }
        ],
        name: "UserOperationRevertReason",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "Withdrawn",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            }
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "delegateAndRevert",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "deposits",
        outputs: [
            {
                internalType: "uint256",
                name: "deposit",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "staked",
                type: "bool"
            },
            {
                internalType: "uint112",
                name: "stake",
                type: "uint112"
            },
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            },
            {
                internalType: "uint48",
                name: "withdrawTime",
                type: "uint48"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "getDepositInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "deposit",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "staked",
                        type: "bool"
                    },
                    {
                        internalType: "uint112",
                        name: "stake",
                        type: "uint112"
                    },
                    {
                        internalType: "uint32",
                        name: "unstakeDelaySec",
                        type: "uint32"
                    },
                    {
                        internalType: "uint48",
                        name: "withdrawTime",
                        type: "uint48"
                    }
                ],
                internalType: "struct IStakeManager.DepositInfo",
                name: "info",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            }
        ],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "initCode",
                type: "bytes"
            }
        ],
        name: "getSenderAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple"
            }
        ],
        name: "getUserOpHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "nonce",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes",
                                name: "initCode",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes",
                                name: "callData",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes32",
                                name: "accountGasLimits",
                                type: "bytes32"
                            },
                            {
                                internalType: "uint256",
                                name: "preVerificationGas",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes32",
                                name: "gasFees",
                                type: "bytes32"
                            },
                            {
                                internalType: "bytes",
                                name: "paymasterAndData",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes",
                                name: "signature",
                                type: "bytes"
                            }
                        ],
                        internalType: "struct PackedUserOperation[]",
                        name: "userOps",
                        type: "tuple[]"
                    },
                    {
                        internalType: "contract IAggregator",
                        name: "aggregator",
                        type: "address"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
                name: "opsPerAggregator",
                type: "tuple[]"
            },
            {
                internalType: "address payable",
                name: "beneficiary",
                type: "address"
            }
        ],
        name: "handleAggregatedOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation[]",
                name: "ops",
                type: "tuple[]"
            },
            {
                internalType: "address payable",
                name: "beneficiary",
                type: "address"
            }
        ],
        name: "handleOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            }
        ],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "callData",
                type: "bytes"
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "nonce",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "verificationGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "callGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "paymasterVerificationGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "paymasterPostOpGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "preVerificationGas",
                                type: "uint256"
                            },
                            {
                                internalType: "address",
                                name: "paymaster",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "maxFeePerGas",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "maxPriorityFeePerGas",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct EntryPoint.MemoryUserOp",
                        name: "mUserOp",
                        type: "tuple"
                    },
                    {
                        internalType: "bytes32",
                        name: "userOpHash",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "prefund",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "contextOffset",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    }
                ],
                internalType: "struct EntryPoint.UserOpInfo",
                name: "opInfo",
                type: "tuple"
            },
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            }
        ],
        name: "innerHandleOp",
        outputs: [
            {
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint192",
                name: "",
                type: "uint192"
            }
        ],
        name: "nonceSequenceNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "targetCallData",
                type: "bytes"
            }
        ],
        name: "simulateCallData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "op",
                type: "tuple"
            }
        ],
        name: "simulateHandleOp",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "paid",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "accountValidationData",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "paymasterValidationData",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "targetSuccess",
                        type: "bool"
                    },
                    {
                        internalType: "bytes",
                        name: "targetResult",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPointSimulations.ExecutionResult",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple"
            }
        ],
        name: "simulateValidation",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "preOpGas",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "prefund",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "accountValidationData",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "paymasterValidationData",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes",
                                name: "paymasterContext",
                                type: "bytes"
                            }
                        ],
                        internalType: "struct IEntryPoint.ReturnInfo",
                        name: "returnInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "senderInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "factoryInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "paymasterInfo",
                        type: "tuple"
                    },
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "aggregator",
                                type: "address"
                            },
                            {
                                components: [
                                    {
                                        internalType: "uint256",
                                        name: "stake",
                                        type: "uint256"
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "unstakeDelaySec",
                                        type: "uint256"
                                    }
                                ],
                                internalType: "struct IStakeManager.StakeInfo",
                                name: "stakeInfo",
                                type: "tuple"
                            }
                        ],
                        internalType: "struct IEntryPoint.AggregatorStakeInfo",
                        name: "aggregatorInfo",
                        type: "tuple"
                    }
                ],
                internalType: "struct IEntryPointSimulations.ValidationResult",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            }
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "withdrawAmount",
                type: "uint256"
            }
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    }
]

export const EntryPointSimulations_bytecode =
    "0x60806040526004361061016d5760003560e01c80635895273b116100cb578063b760faf91161007f578063c3bce00911610059578063c3bce009146105ac578063dbed18e0146105d9578063fc7e286d146105f957600080fd5b8063b760faf914610564578063bb9fe6bf14610577578063c23a5cea1461058c57600080fd5b8063765e827f116100b0578063765e827f14610504578063850aaf62146105245780639b249f691461054457600080fd5b80635895273b1461049457806370a08231146104c157600080fd5b8063205c28781161012257806335567e1a1161010757806335567e1a146102905780634afb1247146103255780635287ce121461034557600080fd5b8063205c28781461025057806322cdde4c1461027057600080fd5b80630396cb60116101535780630396cb60146101e55780630bd28e3b146101f85780631b2e01b81461021857600080fd5b806242dc531461018257806301ffc9a7146101b557600080fd5b3661017d5761017b336106cb565b005b600080fd5b34801561018e57600080fd5b506101a261019d3660046141ea565b6106ec565b6040519081526020015b60405180910390f35b3480156101c157600080fd5b506101d56101d03660046142aa565b6108b5565b60405190151581526020016101ac565b61017b6101f33660046142ec565b610a32565b34801561020457600080fd5b5061017b61021336600461433a565b610dc8565b34801561022457600080fd5b506101a2610233366004614355565b600160209081526000928352604080842090915290825290205481565b34801561025c57600080fd5b5061017b61026b36600461438a565b610e10565b34801561027c57600080fd5b506101a261028b3660046143b6565b610fba565b34801561029c57600080fd5b506101a26102ab366004614355565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020908152604080832077ffffffffffffffffffffffffffffffffffffffffffffffff8516845290915290819020549082901b7fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000161792915050565b34801561033157600080fd5b5061017b6103403660046143f2565b610ffc565b34801561035157600080fd5b50610432610360366004614447565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101919091525073ffffffffffffffffffffffffffffffffffffffff1660009081526020818152604091829020825160a0810184528154815260019091015460ff811615159282019290925261010082046dffffffffffffffffffffffffffff16928101929092526f01000000000000000000000000000000810463ffffffff166060830152730100000000000000000000000000000000000000900465ffffffffffff16608082015290565b6040516101ac9190600060a082019050825182526020830151151560208301526dffffffffffffffffffffffffffff604084015116604083015263ffffffff606084015116606083015265ffffffffffff608084015116608083015292915050565b3480156104a057600080fd5b506104b46104af3660046143b6565b6110c2565b6040516101ac91906144d2565b3480156104cd57600080fd5b506101a26104dc366004614447565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b34801561051057600080fd5b5061017b61051f366004614566565b6111b7565b34801561053057600080fd5b5061017b61053f3660046143f2565b611334565b34801561055057600080fd5b5061017b61055f3660046145bd565b6113d9565b61017b610572366004614447565b6106cb565b34801561058357600080fd5b5061017b6114c4565b34801561059857600080fd5b5061017b6105a7366004614447565b6116a4565b3480156105b857600080fd5b506105cc6105c73660046143b6565b611991565b6040516101ac91906145ff565b3480156105e557600080fd5b5061017b6105f4366004614566565b611c95565b34801561060557600080fd5b50610681610614366004614447565b6000602081905290815260409020805460019091015460ff81169061010081046dffffffffffffffffffffffffffff16906f01000000000000000000000000000000810463ffffffff1690730100000000000000000000000000000000000000900465ffffffffffff1685565b6040805195865293151560208601526dffffffffffffffffffffffffffff9092169284019290925263ffffffff909116606083015265ffffffffffff16608082015260a0016101ac565b60015b60058110156106df576001016106ce565b6106e882612141565b5050565b6000805a9050333014610760576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393220696e7465726e616c2063616c6c206f6e6c7900000000000000000060448201526064015b60405180910390fd5b8451606081015160a082015181016127100160405a603f0281610785576107856146df565b0410156107b6577fdeaddead0000000000000000000000000000000000000000000000000000000060005260206000fd5b8751600090156108575760006107d3846000015160008c86612197565b9050806108555760006107e76108006121af565b80519091501561084f57846000015173ffffffffffffffffffffffffffffffffffffffff168a602001517f1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a20187602001518460405161084692919061470e565b60405180910390a35b60019250505b505b600088608001515a86030190506108a7828a8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506121db915050565b9a9950505050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f60fc6b6e00000000000000000000000000000000000000000000000000000000148061094857507fffffffff0000000000000000000000000000000000000000000000000000000082167f915074d800000000000000000000000000000000000000000000000000000000145b8061099457507fffffffff0000000000000000000000000000000000000000000000000000000082167fcf28ef9700000000000000000000000000000000000000000000000000000000145b806109e057507fffffffff0000000000000000000000000000000000000000000000000000000082167f3e84f02100000000000000000000000000000000000000000000000000000000145b80610a2c57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b33600090815260208190526040902063ffffffff8216610aae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f6d757374207370656369667920756e7374616b652064656c61790000000000006044820152606401610757565b600181015463ffffffff6f0100000000000000000000000000000090910481169083161015610b39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f63616e6e6f7420646563726561736520756e7374616b652074696d65000000006044820152606401610757565b6001810154600090610b6190349061010090046dffffffffffffffffffffffffffff16614756565b905060008111610bcd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207374616b652073706563696669656400000000000000000000000000006044820152606401610757565b6dffffffffffffffffffffffffffff811115610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f7374616b65206f766572666c6f770000000000000000000000000000000000006044820152606401610757565b6040805160a08101825283548152600160208083018281526dffffffffffffffffffffffffffff86811685870190815263ffffffff8a811660608801818152600060808a0181815233808352828a52918c90209a518b55965199909801805494519151965165ffffffffffff16730100000000000000000000000000000000000000027fffffffffffffff000000000000ffffffffffffffffffffffffffffffffffffff979094166f0100000000000000000000000000000002969096167fffffffffffffff00000000000000000000ffffffffffffffffffffffffffffff91909516610100027fffffffffffffffffffffffffffffffffff0000000000000000000000000000ff991515999099167fffffffffffffffffffffffffffffffffff00000000000000000000000000000090941693909317979097179190911691909117179055835185815290810192909252917fa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01910160405180910390a2505050565b33600090815260016020908152604080832077ffffffffffffffffffffffffffffffffffffffffffffffff851684529091528120805491610e0883614769565b919050555050565b3360009081526020819052604090208054821115610e8a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f576974686472617720616d6f756e7420746f6f206c61726765000000000000006044820152606401610757565b8054610e979083906147a1565b81556040805173ffffffffffffffffffffffffffffffffffffffff851681526020810184905233917fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb910160405180910390a260008373ffffffffffffffffffffffffffffffffffffffff168360405160006040518083038185875af1925050503d8060008114610f44576040519150601f19603f3d011682016040523d82523d6000602084013e610f49565b606091505b5050905080610fb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6661696c656420746f20776974686472617700000000000000000000000000006044820152606401610757565b50505050565b6000610fc582612403565b6040805160208101929092523090820152466060820152608001604051602081830303815290604052805190602001209050919050565b6000606073ffffffffffffffffffffffffffffffffffffffff85161561108c578473ffffffffffffffffffffffffffffffffffffffff1684846040516110439291906147b4565b6000604051808303816000865af19150503d8060008114611080576040519150601f19603f3d011682016040523d82523d6000602084013e611085565b606091505b5090925090505b81816040517fd12c41340000000000000000000000000000000000000000000000000000000081526004016107579291906147c4565b6110fd6040518060c0016040528060008152602001600081526020016000815260200160008152602001600015158152602001606081525090565b61110561241c565b61110d613ddc565b6111168361245d565b600080611125600086856125d0565b9150915060006111376000878661282f565b90506040518060c00160405280856080015181526020018281526020018481526020018381526020016000151581526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152509450505050506111b26001600255565b919050565b6111bf61241c565b8160008167ffffffffffffffff8111156111db576111db613f88565b60405190808252806020026020018201604052801561121457816020015b611201613ddc565b8152602001906001900390816111f95790505b50905060005b8281101561128d576000828281518110611236576112366147df565b60200260200101519050600080611271848a8a87818110611259576112596147df565b905060200281019061126b919061480e565b856125d0565b915091506112828483836000612c05565b50505060010161121a565b506040516000907fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972908290a160005b838110156113175761130b818888848181106112da576112da6147df565b90506020028101906112ec919061480e565b8584815181106112fe576112fe6147df565b602002602001015161282f565b909101906001016112bc565b506113228482612e5a565b50505061132f6001600255565b505050565b6000808473ffffffffffffffffffffffffffffffffffffffff16848460405161135e9291906147b4565b600060405180830381855af49150503d8060008114611399576040519150601f19603f3d011682016040523d82523d6000602084013e61139e565b606091505b509150915081816040517f994105540000000000000000000000000000000000000000000000000000000081526004016107579291906147c4565b60006113fa60065473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1663570e1a3684846040518363ffffffff1660e01b8152600401611434929190614895565b6020604051808303816000875af1158015611453573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147791906148a9565b6040517f6ca7b80600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152909150602401610757565b336000908152602081905260408120600181015490916f0100000000000000000000000000000090910463ffffffff16900361155c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74207374616b6564000000000000000000000000000000000000000000006044820152606401610757565b600181015460ff166115ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f616c726561647920756e7374616b696e670000000000000000000000000000006044820152606401610757565b60018101546000906115f5906f01000000000000000000000000000000900463ffffffff16426148c6565b6001830180547fffffffffffffff000000000000ffffffffffffffffffffffffffffffffffff001673010000000000000000000000000000000000000065ffffffffffff84169081027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169190911790915560405190815290915033907ffa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a906020015b60405180910390a25050565b336000908152602081905260409020600181015461010090046dffffffffffffffffffffffffffff1680611734576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f207374616b6520746f2077697468647261770000000000000000000000006044820152606401610757565b6001820154730100000000000000000000000000000000000000900465ffffffffffff166117be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6d7573742063616c6c20756e6c6f636b5374616b6528292066697273740000006044820152606401610757565b60018201544273010000000000000000000000000000000000000090910465ffffffffffff16111561184c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f5374616b65207769746864726177616c206973206e6f742064756500000000006044820152606401610757565b6001820180547fffffffffffffff000000000000000000000000000000000000000000000000ff1690556040805173ffffffffffffffffffffffffffffffffffffffff851681526020810183905233917fb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda3910160405180910390a260008373ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611921576040519150601f19603f3d011682016040523d82523d6000602084013e611926565b606091505b5050905080610fb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152606401610757565b611999613e8e565b6119a1613ddc565b6119aa8361245d565b6000806119b9600086856125d0565b845160e001516040805180820182526000808252602080830182815273ffffffffffffffffffffffffffffffffffffffff95861683528282528483206001908101546dffffffffffffffffffffffffffff6101008083048216885263ffffffff6f010000000000000000000000000000009384900481169095528e51518951808b018b5288815280880189815291909b168852878752898820909401549081049091168952049091169052835180850190945281845283015293955091935090366000611a8960408b018b6148ec565b909250905060006014821015611aa0576000611abb565b611aae601460008486614951565b611ab79161497b565b60601c5b6040805180820182526000808252602080830182815273ffffffffffffffffffffffffffffffffffffffff86168352908290529290206001015461010081046dffffffffffffffffffffffffffff1682526f01000000000000000000000000000000900463ffffffff169091529091509350505050600085905060006040518060a001604052808960800151815260200189604001518152602001888152602001878152602001611b6d8a6060015190565b905260408051808201825260035473ffffffffffffffffffffffffffffffffffffffff908116825282518084019093526004548352600554602084810191909152820192909252919250831615801590611bde575060018373ffffffffffffffffffffffffffffffffffffffff1614155b15611c625760408051808201825273ffffffffffffffffffffffffffffffffffffffff851680825282518084018452600080825260208083018281529382528181529490206001015461010081046dffffffffffffffffffffffffffff1682526f01000000000000000000000000000000900463ffffffff16909152909182015290505b6040805160a081018252928352602083019590955293810192909252506060810192909252608082015295945050505050565b611c9d61241c565b816000805b82811015611e8f5736868683818110611cbd57611cbd6147df565b9050602002810190611ccf91906149c3565b9050366000611cde83806149f7565b90925090506000611cf56040850160208601614447565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff821601611d96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393620696e76616c69642061676772656761746f720000000000000000006044820152606401610757565b73ffffffffffffffffffffffffffffffffffffffff811615611e735773ffffffffffffffffffffffffffffffffffffffff8116632dd811338484611ddd60408901896148ec565b6040518563ffffffff1660e01b8152600401611dfc9493929190614baf565b60006040518083038186803b158015611e1457600080fd5b505afa925050508015611e25575060015b611e73576040517f86a9f75000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602401610757565b611e7d8287614756565b95505060019093019250611ca2915050565b5060008167ffffffffffffffff811115611eab57611eab613f88565b604051908082528060200260200182016040528015611ee457816020015b611ed1613ddc565b815260200190600190039081611ec95790505b5090506000805b84811015611fc15736888883818110611f0657611f066147df565b9050602002810190611f1891906149c3565b9050366000611f2783806149f7565b90925090506000611f3e6040850160208601614447565b90508160005b81811015611faf576000898981518110611f6057611f606147df565b60200260200101519050600080611f838b898987818110611259576112596147df565b91509150611f9384838389612c05565b8a611f9d81614769565b9b505060019093019250611f44915050565b505060019094019350611eeb92505050565b506040517fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f97290600090a150600080805b858110156120fc573689898381811061200c5761200c6147df565b905060200281019061201e91906149c3565b90506120306040820160208301614447565b73ffffffffffffffffffffffffffffffffffffffff167f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d60405160405180910390a236600061207f83806149f7565b90925090508060005b818110156120eb576120ca888585848181106120a6576120a66147df565b90506020028101906120b8919061480e565b8b8b815181106112fe576112fe6147df565b6120d49088614756565b9650876120e081614769565b985050600101612088565b505060019093019250611ff1915050565b506040516000907f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d908290a26121328682612e5a565b505050505061132f6001600255565b600061214d8234612fa1565b90508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c48260405161169891815260200190565b6000806000845160208601878987f195945050505050565b60603d828111156121bd5750815b604051602082018101604052818152816000602083013e9392505050565b6000805a8551909150600090816121f182612fe1565b60e083015190915073ffffffffffffffffffffffffffffffffffffffff811661221d5782519350612318565b80935060008851111561231857868202955060028a600281111561224357612243614c66565b146123185760a08301516040517f7c627b2100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831691637c627b21916122a5908e908d908c908990600401614c95565b600060405180830381600088803b1580156122bf57600080fd5b5087f1935050505080156122d1575060015b6123185760006122e26108006121af565b9050806040517fad7954bc0000000000000000000000000000000000000000000000000000000081526004016107579190614cf8565b5a60a0840151606085015160808c01519288039990990198019088038082111561234b576064600a828403020498909801975b505060408901518783029650868110156123c05760028b600281111561237357612373614c66565b03612396578096506123848a613013565b6123918a6000898b61306f565b6123f5565b7fdeadaa510000000000000000000000000000000000000000000000000000000060005260206000fd5b8681036123cd8682612fa1565b506000808d60028111156123e3576123e3614c66565b1490506123f28c828b8d61306f565b50505b505050505050949350505050565b600061240e826130f7565b805190602001209050919050565b6002805403612457576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028055565b61255d6040517fd69400000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1660228201527f01000000000000000000000000000000000000000000000000000000000000006036820152600090603701604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529190528051602090910120600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117905550565b600061258e61256f60408401846148ec565b61257c6020860186614447565b61258960e08701876148ec565b6131bc565b905080516000146106e8576000816040517f220266b600000000000000000000000000000000000000000000000000000000815260040161075792919061470e565b60008060005a84519091506125e586826132a5565b6125ee86610fba565b6020860152604081015161012082015161010083015160a08401516080850151606086015160c0870151861717171717176effffffffffffffffffffffffffffff811115612698576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f41413934206761732076616c756573206f766572666c6f7700000000000000006044820152606401610757565b60006126c78460c081015160a08201516080830151606084015160408501516101009095015194010101010290565b90506126d68a8a8a84876133f0565b96506126ea84600001518560200151613631565b61275957896040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601a908201527f4141323520696e76616c6964206163636f756e74206e6f6e6365000000000000606082015260800190565b825a860311156127ce57896040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601e908201527f41413236206f76657220766572696669636174696f6e4761734c696d69740000606082015260800190565b60e084015160609073ffffffffffffffffffffffffffffffffffffffff1615612802576127fd8b8b8b8561368c565b975090505b604089018290528060608a015260a08a01355a870301896080018181525050505050505050935093915050565b6000805a90506000612842846060015190565b604051909150600090368261285a60608a018a6148ec565b915091506060600082600381111561287157843591505b507f72288ed1000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016129b15760008b8b602001516040516024016128d4929190614d0b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f8dd7712f000000000000000000000000000000000000000000000000000000001790525190915030906242dc53906129679084908f908d90602401614df1565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050925050612a28565b3073ffffffffffffffffffffffffffffffffffffffff166242dc5385858d8b6040516024016129e39493929190614e31565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505091505b602060008351602085016000305af19550600051985084604052505050505080612bfb5760003d80602003612a635760206000803e60005191505b507fdeaddead000000000000000000000000000000000000000000000000000000008103612af657876040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052600f908201527f41413935206f7574206f66206761730000000000000000000000000000000000606082015260800190565b7fdeadaa51000000000000000000000000000000000000000000000000000000008103612b6057600086608001515a612b2f90876147a1565b612b399190614756565b6040880151909150612b4a88613013565b612b57886000838561306f565b9550612bf99050565b8551805160208089015192015173ffffffffffffffffffffffffffffffffffffffff90911691907ff62676f440ff169a3a9afdbf812e89e7f95975ee8e5c31214ffdef631c5f479290612bb46108006121af565b604051612bc292919061470e565b60405180910390a3600086608001515a612bdc90876147a1565b612be69190614756565b9050612bf560028886846121db565b9550505b505b5050509392505050565b600080612c11856138e3565b915091508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612cb357856040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526014908201527f41413234207369676e6174757265206572726f72000000000000000000000000606082015260800190565b8015612d2457856040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526017908201527f414132322065787069726564206f72206e6f7420647565000000000000000000606082015260800190565b6000612d2f856138e3565b9250905073ffffffffffffffffffffffffffffffffffffffff811615612dba57866040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526014908201527f41413334207369676e6174757265206572726f72000000000000000000000000606082015260800190565b8115612e5157866040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526021908201527f41413332207061796d61737465722065787069726564206f72206e6f7420647560608201527f6500000000000000000000000000000000000000000000000000000000000000608082015260a00190565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216612ed7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4141393020696e76616c69642062656e656669636961727900000000000000006044820152606401610757565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114612f31576040519150601f19603f3d011682016040523d82523d6000602084013e612f36565b606091505b505090508061132f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f41413931206661696c65642073656e6420746f2062656e6566696369617279006044820152606401610757565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040812080548290612fd5908590614756565b91829055509392505050565b61010081015161012082015160009190808203612fff575092915050565b61300b82488301613936565b949350505050565b805180516020808401519281015160405190815273ffffffffffffffffffffffffffffffffffffffff90921692917f67b4fa9642f42120bf031f3051d1824b0fe25627945b27b8a6a65d5761d5482e910160405180910390a350565b835160e0810151815160208088015193015160405173ffffffffffffffffffffffffffffffffffffffff9384169492909316927f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f916130e99189908990899093845291151560208401526040830152606082015260800190565b60405180910390a450505050565b606081356020830135600061311761311260408701876148ec565b61394e565b9050600061312b61311260608801886148ec565b9050608086013560a087013560c0880135600061314e61311260e08c018c6148ec565b6040805173ffffffffffffffffffffffffffffffffffffffff9a909a1660208b015289810198909852606089019690965250608087019390935260a086019190915260c085015260e08401526101008084019190915281518084039091018152610120909201905292915050565b6060841580156131e1575073ffffffffffffffffffffffffffffffffffffffff84163b155b15613220575060408051808201909152601981527f41413230206163636f756e74206e6f74206465706c6f79656400000000000000602082015261329c565b6014821061328b5760006132376014828587614951565b6132409161497b565b60601c9050803b60000361328957505060408051808201909152601b81527f41413330207061796d6173746572206e6f74206465706c6f7965640000000000602082015261329c565b505b506040805160208101909152600081525b95945050505050565b6132b26020830183614447565b73ffffffffffffffffffffffffffffffffffffffff168152602082810135908201526fffffffffffffffffffffffffffffffff6080808401358281166060850152811c604084015260a084013560c0808501919091528401359182166101008401521c61012082015236600061332b60e08501856148ec565b909250905080156133d55760348110156133a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4141393320696e76616c6964207061796d6173746572416e64446174610000006044820152606401610757565b6133ab8282613961565b60a0860152608085015273ffffffffffffffffffffffffffffffffffffffff1660e0840152610fb4565b600060e084018190526080840181905260a084015250505050565b825180516000919061340f888761340a60408b018b6148ec565b6139d2565b60e0820151600073ffffffffffffffffffffffffffffffffffffffff821661346d5773ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205487811161346657808803613469565b60005b9150505b60208801516040517f19822f7c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516916319822f7c9189916134c9918e91908790600401614e68565b60206040518083038160008887f193505050508015613523575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261352091810190614e8d565b60015b61356757896135336108006121af565b6040517f65c8fd4d000000000000000000000000000000000000000000000000000000008152600401610757929190614ea6565b945073ffffffffffffffffffffffffffffffffffffffff82166136245773ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902080548089111561361e578b6040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526017908201527f41413231206469646e2774207061792070726566756e64000000000000000000606082015260800190565b88900390555b5050505095945050505050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020908152604080832084821c808552925282208054849167ffffffffffffffff831691908561367e83614769565b909155501495945050505050565b60606000805a855160e081015173ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020805493945091929091908781101561373b578a6040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601e908201527f41413331207061796d6173746572206465706f73697420746f6f206c6f770000606082015260800190565b87810382600001819055506000846080015190508373ffffffffffffffffffffffffffffffffffffffff166352b7512c828d8d602001518d6040518563ffffffff1660e01b815260040161379193929190614e68565b60006040518083038160008887f1935050505080156137f057506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526137ed9190810190614ef3565b60015b613834578b6138006108006121af565b6040517f65c8fd4d000000000000000000000000000000000000000000000000000000008152600401610757929190614f74565b9098509650805a870311156138d4578b6040517f220266b60000000000000000000000000000000000000000000000000000000081526004016107579181526040602082018190526027908201527f41413336206f766572207061796d6173746572566572696669636174696f6e4760608201527f61734c696d697400000000000000000000000000000000000000000000000000608082015260a00190565b50505050505094509492505050565b600080826000036138f957506000928392509050565b600061390484613d5e565b9050806040015165ffffffffffff1642118061392b5750806020015165ffffffffffff1642105b905194909350915050565b60008183106139455781613947565b825b9392505050565b6000604051828085833790209392505050565b600080806139726014828688614951565b61397b9161497b565b60601c61398c602460148789614951565b61399591614fc1565b60801c6139a660346024888a614951565b6139af91614fc1565b9194506fffffffffffffffffffffffffffffffff16925060801c90509250925092565b8015610fb45782515173ffffffffffffffffffffffffffffffffffffffff81163b15613a6357846040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601f908201527f414131302073656e64657220616c726561647920636f6e737472756374656400606082015260800190565b6000613a8460065473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1663570e1a3686600001516040015186866040518463ffffffff1660e01b8152600401613ac7929190614895565b60206040518083038160008887f1158015613ae6573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190613b0b91906148a9565b905073ffffffffffffffffffffffffffffffffffffffff8116613b9357856040517f220266b6000000000000000000000000000000000000000000000000000000008152600401610757918152604060208201819052601b908201527f4141313320696e6974436f6465206661696c6564206f72204f4f470000000000606082015260800190565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614613c3057856040517f220266b600000000000000000000000000000000000000000000000000000000815260040161075791815260406020808301829052908201527f4141313420696e6974436f6465206d7573742072657475726e2073656e646572606082015260800190565b8073ffffffffffffffffffffffffffffffffffffffff163b600003613cb957856040517f220266b600000000000000000000000000000000000000000000000000000000815260040161075791815260406020808301829052908201527f4141313520696e6974436f6465206d757374206372656174652073656e646572606082015260800190565b6000613cc86014828688614951565b613cd19161497b565b60601c90508273ffffffffffffffffffffffffffffffffffffffff1686602001517fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d83896000015160e00151604051613d4d92919073ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b60405180910390a350505050505050565b60408051606081018252600080825260208201819052918101919091528160a081901c65ffffffffffff8116600003613d9a575065ffffffffffff5b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff909316835260d09490941c602083015265ffffffffffff16928101929092525090565b6040518060a00160405280613e69604051806101400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b8152602001600080191681526020016000815260200160008152602001600081525090565b6040518060a00160405280613ecb6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b8152602001613eed604051806040016040528060008152602001600081525090565b8152602001613f0f604051806040016040528060008152602001600081525090565b8152602001613f31604051806040016040528060008152602001600081525090565b8152602001613f3e613f43565b905290565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001613f3e604051806040016040528060008152602001600081525090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715613fda57613fda613f88565b60405290565b604051610140810167ffffffffffffffff81118282101715613fda57613fda613f88565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561404b5761404b613f88565b604052919050565b600067ffffffffffffffff82111561406d5761406d613f88565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b73ffffffffffffffffffffffffffffffffffffffff811681146140bb57600080fd5b50565b80356111b281614099565b60008183036101c08112156140dd57600080fd5b6140e5613fb7565b9150610140808212156140f757600080fd5b6140ff613fe0565b915061410a846140be565b82526020840135602083015260408401356040830152606084013560608301526080840135608083015260a084013560a083015260c084013560c083015261415460e085016140be565b60e0830152610100848101359083015261012080850135908301529082528201356020820152610160820135604082015261018082013560608201526101a0909101356080820152919050565b60008083601f8401126141b357600080fd5b50813567ffffffffffffffff8111156141cb57600080fd5b6020830191508360208285010111156141e357600080fd5b9250929050565b600080600080610200858703121561420157600080fd5b843567ffffffffffffffff8082111561421957600080fd5b818701915087601f83011261422d57600080fd5b813561424061423b82614053565b614004565b81815289602083860101111561425557600080fd5b81602085016020830137600060208383010152809750505061427a88602089016140c9565b94506101e087013591508082111561429157600080fd5b5061429e878288016141a1565b95989497509550505050565b6000602082840312156142bc57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461394757600080fd5b6000602082840312156142fe57600080fd5b813563ffffffff8116811461394757600080fd5b803577ffffffffffffffffffffffffffffffffffffffffffffffff811681146111b257600080fd5b60006020828403121561434c57600080fd5b61394782614312565b6000806040838503121561436857600080fd5b823561437381614099565b915061438160208401614312565b90509250929050565b6000806040838503121561439d57600080fd5b82356143a881614099565b946020939093013593505050565b6000602082840312156143c857600080fd5b813567ffffffffffffffff8111156143df57600080fd5b8201610120818503121561394757600080fd5b60008060006040848603121561440757600080fd5b833561441281614099565b9250602084013567ffffffffffffffff81111561442e57600080fd5b61443a868287016141a1565b9497909650939450505050565b60006020828403121561445957600080fd5b813561394781614099565b60005b8381101561447f578181015183820152602001614467565b50506000910152565b600081518084526144a0816020860160208601614464565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526020820151604082015260408201516060820152606082015160808201526080820151151560a0820152600060a083015160c08084015261300b60e0840182614488565b60008083601f84011261453357600080fd5b50813567ffffffffffffffff81111561454b57600080fd5b6020830191508360208260051b85010111156141e357600080fd5b60008060006040848603121561457b57600080fd5b833567ffffffffffffffff81111561459257600080fd5b61459e86828701614521565b90945092505060208401356145b281614099565b809150509250925092565b600080602083850312156145d057600080fd5b823567ffffffffffffffff8111156145e757600080fd5b6145f3858286016141a1565b90969095509350505050565b602080825282516101408383015280516101608401529081015161018083015260408101516101a083015260608101516101c08301526080015160a06101e0830152600090614652610200840182614488565b90506020840151614670604085018280518252602090810151910152565b506040840151805160808581019190915260209182015160a08601526060860151805160c087015282015160e0860152850151805173ffffffffffffffffffffffffffffffffffffffff1661010086015280820151805161012087015290910151610140850152509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b82815260406020820152600061300b6040830184614488565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610a2c57610a2c614727565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361479a5761479a614727565b5060010190565b81810381811115610a2c57610a2c614727565b8183823760009101908152919050565b821515815260406020820152600061300b6040830184614488565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee183360301811261484257600080fd5b9190910192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152600061300b60208301848661484c565b6000602082840312156148bb57600080fd5b815161394781614099565b65ffffffffffff8181168382160190808211156148e5576148e5614727565b5092915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261492157600080fd5b83018035915067ffffffffffffffff82111561493c57600080fd5b6020019150368190038213156141e357600080fd5b6000808585111561496157600080fd5b8386111561496e57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156149bb5780818660140360031b1b83161692505b505092915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa183360301811261484257600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112614a2c57600080fd5b83018035915067ffffffffffffffff821115614a4757600080fd5b6020019150600581901b36038213156141e357600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112614a9457600080fd5b830160208101925035905067ffffffffffffffff811115614ab457600080fd5b8036038213156141e357600080fd5b6000610120614aef84614ad5856140be565b73ffffffffffffffffffffffffffffffffffffffff169052565b60208301356020850152614b066040840184614a5f565b826040870152614b19838701828461484c565b92505050614b2a6060840184614a5f565b8583036060870152614b3d83828461484c565b925050506080830135608085015260a083013560a085015260c083013560c0850152614b6c60e0840184614a5f565b85830360e0870152614b7f83828461484c565b92505050610100614b9281850185614a5f565b86840383880152614ba484828461484c565b979650505050505050565b6040808252810184905260006060600586901b830181019083018783805b89811015614c4f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa087860301845282357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee18c3603018112614c2d578283fd5b614c39868d8301614ac3565b9550506020938401939290920191600101614bcd565b505050508281036020840152614ba481858761484c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060038610614cce577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b85825260806020830152614ce56080830186614488565b6040830194909452506060015292915050565b6020815260006139476020830184614488565b604081526000614d1e6040830185614ac3565b90508260208301529392505050565b8051805173ffffffffffffffffffffffffffffffffffffffff1683526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151614dac60e085018273ffffffffffffffffffffffffffffffffffffffff169052565b5061010081810151908401526101209081015190830152602081015161014083015260408101516101608301526060810151610180830152608001516101a090910152565b6000610200808352614e0581840187614488565b9050614e146020840186614d2d565b8281036101e0840152614e278185614488565b9695505050505050565b6000610200808352614e46818401878961484c565b9050614e556020840186614d2d565b8281036101e0840152614ba48185614488565b606081526000614e7b6060830186614ac3565b60208301949094525060400152919050565b600060208284031215614e9f57600080fd5b5051919050565b82815260606020820152600d60608201527f4141323320726576657274656400000000000000000000000000000000000000608082015260a06040820152600061300b60a0830184614488565b60008060408385031215614f0657600080fd5b825167ffffffffffffffff811115614f1d57600080fd5b8301601f81018513614f2e57600080fd5b8051614f3c61423b82614053565b818152866020838501011115614f5157600080fd5b614f62826020830160208601614464565b60209590950151949694955050505050565b82815260606020820152600d60608201527f4141333320726576657274656400000000000000000000000000000000000000608082015260a06040820152600061300b60a0830184614488565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156149bb5760109490940360031b84901b169092169291505056fea264697066735822122009f412c11f8aed4d06a3a8aa48dcef8ebd6eb331926de56f851ac57fea99853164736f6c63430008170033"
