import { AnchorProvider, Idl, Program } from "@coral-xyz/anchor";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import * as Paidnet from '../idl/paidnet.json';


const paidnetId = new PublicKey("BnwF9UvkZGPzoAm8GbuUxkfgHLB9tpK5zx25tv715J6a");
const connection = new Connection(clusterApiUrl('devnet'));
const provider = new AnchorProvider(connection, {} as any, { preflightCommitment: 'finalized' });
const paidnetProgram = new Program(Paidnet as Idl, paidnetId, provider);


export const getPools = async () => {
  const pools = await paidnetProgram.account.pool.all();
  return pools;
}

export const getPoolByPubkey = async (pubkey: string)  => {
  const pool = await paidnetProgram.account.pool.fetch(new PublicKey(pubkey));
  return pool;
}
