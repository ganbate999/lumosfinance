import React from "react";
import "./header.css"
import { Button } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import { useTranslation } from 'contexts/Localization'

import UserMenu from '../Menu/UserMenu';
import GlobalSettings from '../Menu/GlobalSettings';

// const StyledNav = styled.nav`
//   margin-bottom: 40px;
// `
const getActiveIndex = (pathname: string): number => {
    if (
        pathname.includes('/pool') ||
        pathname.includes('/create') ||
        pathname.includes('/add') ||
        pathname.includes('/remove') ||
        pathname.includes('/find') ||
        pathname.includes('/liquidity')
    ) {
        return 1
    }
    return 0
}
function Navbar() {
    // document.querySelector(".sc-iGkqmO").innerHTML = "";
    const { account } = useWeb3React()
    const { theme } = useTheme()
    const { t } = useTranslation()
    return (
        <>
            <header className="header">
               

                <div className="content__header">
                    <div className="logo__header">
                        <a href="./"><img src="https://lumos.world/img/logo.png" alt="" /> </a>
                    </div>

                    <div className="botones">
                        <Link to="/swap/0xdd05b1110147098b26fd3d457aa2992c034d3cfc">
                            <Button className="boton-head" >{t('Exchange')}</Button>
                        </Link>
                        <Link to="/pool">
                            <Button className="boton-head" >{t('Liquidity')}</Button>
                        </Link>
                    </div>

                    <div className="text__header">
                        <GlobalSettings/>
                        <UserMenu />
                    </div>

                </div>
                
            </header>
        </>
    );
}
export default Navbar;