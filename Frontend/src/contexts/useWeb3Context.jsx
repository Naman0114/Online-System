import { useContext } from "react";
import { Web3Context } from "./createWeb3Context";


export const useWeb3context=()=>{
    return useContext(Web3Context);
}