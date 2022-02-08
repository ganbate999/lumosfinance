import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Flex, Text } from '@pancakeswap/uikit'
import { AppDispatch } from 'state'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { clearAllTransactions } from 'state/transactions/actions'
import { orderBy } from 'lodash'
import TrxRowSwap from './TrxRowSwap'

const TransactionsSwap: React.FC = () => {
  const { chainId } = useActiveWeb3React()
  const dispatch = useDispatch<AppDispatch>()
  const { t } = useTranslation()
  const allTransactions = useAllTransactions()
  const sortedTransactions = orderBy(Object.values(allTransactions).filter(isTransactionRecent), 'addedTime', 'desc')

  const handleClearAll = () => {
    if (chainId) {
      dispatch(clearAllTransactions({ chainId }))
    }
  }

  return (
    // <Box minHeight="120px" className="mt3">
    <div>
    <div className="header__aside">
            <p className="titulo__header">Recent Transactions</p>
        </div>
    <div className="glass ipunts__box">
        
        <div className="inputs__flex align-items-center">
      {sortedTransactions.length > 0 ? (
        sortedTransactions.map((txn) => <TrxRowSwap key={txn.hash} txn={txn} />)
      ) : (
        <Text textAlign="center">{t('No recent transactions')}</Text>
      )}
      </div>
    </div>
    </div>
    // </Box>
  )
}

export default TransactionsSwap
