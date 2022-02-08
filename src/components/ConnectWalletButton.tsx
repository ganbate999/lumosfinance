import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
// import "./ConnectWalletButton.css"

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button className='boton btn__header' onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton
