import React from "react";
import { useWeb3React } from '@web3-react/core'
import useTokenBalance, { useGetBnbBalance } from 'hooks/useTokenBalance'
import { formatBigNumber, getFullDisplayBalance } from 'utils/formatBalance'
import TransactionsSwap from '../../../components/Menu/UserMenu/TransactionsSwap'
import CopyAddr from "../../../components/Menu/UserMenu/CopyAddr"

export default function ViewBalance(){
    const { account } = useWeb3React()
    const { balance, fetchStatus } = useGetBnbBalance()
    return(
        <>
        <div className="aside">
            <div className="header__aside"><p className="titulo__header">BNB: {formatBigNumber(balance, 6)}</p> </div>
            {/* <div className="gle" /> */}

            <div className="glass">
                <div className="color"/>
                <div className="color"/>


                <div className="pool_box">
                    <div className="box__flex d-flex align-items-center">
                    <div className="">LUSI</div>
                    <div className="box__icon"><i className="fas fa-exclamation" /></div>
                    </div>
                    <div className="box__flex d-flex align-items-center">
                        <div className="box__boton boton glass">LUSI:10,900</div>
                        <div>
                            <CopyAddr account={account}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <TransactionsSwap />
            </div>
        </div>
        

        </>
    );


}

// export default ViewBalance();