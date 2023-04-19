import { fromZodError } from "zod-validation-error"
import { IBundlerArgs, IBundlerArgsInput, bundlerArgsSchema } from "@alto/config"
import { RpcHandler, Server } from "@alto/api"
import { createPublicClient, http } from "viem"

const parseArgs = (args: IBundlerArgsInput): IBundlerArgs => {
    // validate every arg, make typesafe so if i add a new arg i have to validate it
    const parsing = bundlerArgsSchema.safeParse(args)
    if (!parsing.success) {
        const error = fromZodError(parsing.error)
        throw new Error(error.message)
    }

    return parsing.data
}

export const bundlerHandler = async (args: IBundlerArgsInput): Promise<void> => {
    const parsedArgs = parseArgs(args)
    const client = createPublicClient(
        {
            transport: http(args.rpcUrl),
        }
    )
    const rpcEndpoint = new RpcHandler(client)

    const server = new Server(rpcEndpoint, parsedArgs)
    await server.start()
}
