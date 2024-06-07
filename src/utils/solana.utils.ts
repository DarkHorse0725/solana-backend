import { AnchorProvider, Idl, Program } from "@coral-xyz/anchor";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import * as Paidnet from '../idl/paidnet.json';


const paidnetId = new PublicKey("AqwFRLotetpQpfVSF9pPFAR1MqB9NmY3a9fUyjJ9nBCv");
const connection = new Connection(clusterApiUrl('devnet'));
const provider = new AnchorProvider(connection, {} as any, { preflightCommitment: 'finalized' });
const paidnetProgram = new Program(Paidnet as Idl, paidnetId, provider);


export const getPools = async () => {
  const pools = await paidnetProgram.account.poolStorage.all();
  return pools;
}
