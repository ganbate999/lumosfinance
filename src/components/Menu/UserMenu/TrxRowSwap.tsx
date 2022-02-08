import React from 'react'
import { BlockIcon, CheckmarkCircleIcon, Flex, Link, OpenNewIcon, RefreshIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { TransactionDetails } from 'state/transactions/reducer'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getBscScanLink } from 'utils'

interface TransactionRowProps {
  txn: TransactionDetails
}

const TxnIcon = styled(Flex)`
  align-items: center;
  flex: none;
  width: 24px;
`

const Summary = styled.div`
  flex: 1;
  padding: 0 8px;
`

const TxnLink = styled(Link)`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`

const renderIcon = (txn: TransactionDetails) => {
  if (!txn.receipt) {
    return <RefreshIcon spin width="24px" />
  }

  return txn.receipt?.status === 1 || typeof txn.receipt?.status === 'undefined' ? (
    <CheckmarkCircleIcon color="success" width="24px" />
  ) : (
    <BlockIcon color="failure" width="24px" />
  )
}

const TrxRowSwap: React.FC<TransactionRowProps> = ({ txn }) => {
  const { chainId } = useActiveWeb3React()

  if (!txn) {
    return null
  }

  return (
    <div className='datos mt-3 right'>
        <TxnLink href={getBscScanLink(txn.hash, 'transaction', chainId)} external>
        <div className="hora">
            <TxnIcon>{renderIcon(txn)}</TxnIcon>
        </div>
        <div className="glass input__check">
            <Summary>{txn.summary ?? txn.hash}</Summary>
        </div>
        <div className="icon__input">
                <TxnIcon>
                    <OpenNewIcon width="24px" color="primary" />
                </TxnIcon>
        </div>

        </TxnLink>
    </div>
  )
}

export default TrxRowSwap