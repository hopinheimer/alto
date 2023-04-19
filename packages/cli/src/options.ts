import { CliCommand, CliCommandOptions } from "./util"
import { bundlerHandler } from "./handler"
import { IBundlerArgsInput } from "@alto/config"

export const bundlerOptions: CliCommandOptions<IBundlerArgsInput> = {
    entryPoints: {
        description: "EntryPoint contract addresses split by commas",
        type: "string",
        require: true
    },
    beneficiary: {
        description: "Beneficiary address to receive fees",
        type: "string",
        require: true
    },
    signerPrivateKey: {
        description: "Private key of the signer",
        type: "string",
        require: true
    },
    rpcUrl: {
        description: "RPC url to connect to",
        type: "string",
        require: true,
        default: "http://localhost:8545"
    },
    minStake: {
        description: "Minimum stake required for a relay (in 10e18)",
        type: "number",
        require: true,
        default: 1
    },
    minUnstakeDelay: {
        description: "Minimum unstake delay",
        type: "number",
        require: true,
        default: 1
    },
    maxBundleWaitTime: {
        description: "Maximum time to wait for a bundle to be submitted",
        type: "number",
        require: true,
        default: 3
    },
    maxBundleSize: {
        description: "Maximum number of operations in mempool before a bundle is submitted",
        type: "number",
        require: true,
        default: 3
    },
    port: {
        description: "Port to listen on",
        type: "number",
        require: true,
        default: 3000
    }
}

export const bundlerCommand: CliCommand<IBundlerArgsInput> = {
    command: "run",
    describe: "Starts a bundler",
    options: bundlerOptions,
    handler: bundlerHandler,
    examples: [
        {
            command:
                "run --entryPoint 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789,0x0576a174D229E3cFA37253523E645A78A0C91B57 --beneficiary 0xa78fCd480107fBFAF84bDE5285A668396891d3E5 --signerPrivateKey 1060ac9646dffa5dc19c188e148c627c50a0e8250a2f195ec3c493ffae3ed019",
            description: "Starts a bundler"
        }
    ]
}