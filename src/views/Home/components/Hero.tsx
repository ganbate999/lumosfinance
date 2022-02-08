import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = '/images/home/lunar-bunny/avatars.png'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <div className="contenido__principal">
        <section className="home">
          <div className="home__titulo">
            <h1 className="heading">Where Finance and Magic become one</h1>
          </div>
          <div className="content__parrafo">
            <p className="parrafo">
              The serious business of fun and finance in the Metaverse World
            </p>
          </div>
        </section>
        <section className="cards">
          <div className="grid__card">

            <div className="box">
              <div className="box__card">
                <div className="container_f">
                  <picture> 
                      <img src={`${"/images/first.png"}`} alt="first" id="first" height="200px" width="200px" />
                  </picture>
                  {/* <div className="fondo__card">

                    <div className="image">
                      <span className="fas fa-retweet" />
                    </div>
                  </div> */}

                </div>

                <div className="text__card">
                  <h2 className="sub__heading">Swap Tokens</h2>
                  <p className="parrafo parrafo-card">
                    Securely swap between crypto assets
                  </p>
                </div>
              </div>
            </div>
            <div className="box">

              <div className="box__card">
                <div className="container_f">
                  <picture > 
                      <img src={`${"/images/second.png"}`} alt="second" id="second" height="200px" width="200px"/>
                  </picture>
                  {/* <div className="fondo__card">

                    <div className="image">
                      <span className=" fas fa-water" />
                    </div>
                  </div> */}

                </div>

                <div className="text__card">
                  <h2 className="sub__heading">Supply Liquidity</h2>
                  <p className="parrafo parrafo-card">
                    Earn yield from transaction fees and liquidity incentives
                  </p>
                </div>
              </div>

            </div>

            <div className="box">

              <div className="box__card">
                <div className="container_f">
                  <picture> 
                      <img src={`${"/images/third.png"}`} alt="third" id="third" height="200px" width="200px" />
                  </picture>
                  {/* <div className="fondo__card"> */}

                    {/* <div className="image">
                      <span className='fas fa-coins' />
                    </div> */}
                  {/* </div>   */}

                </div>

                <div className="text__card">
                  <h2 className="sub__heading">Staking and Farming</h2>
                  <p className="parrafo parrafo-card">
                    Stake Liquidity Pool (LP) tokens or LUSI to earn more LUSI
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
      {/* <BgWrapper> */}
      {/* <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper> */}
      {/* </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      > */}
      {/* <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="secondary" mb="24px">
            {t('The world of avatars is in Lumos.World')}
          </Heading> */}
      {/* <Heading scale="md" mb="24px">
            {t('Trading, your tokens with LumosX Swap')}
          </Heading> */}
      {/* <Flex>
            {!account && <ConnectWalletButton mr="8px" />}
            <Link to="/swap/0xdd05b1110147098b26fd3d457aa2992c034d3cfc">
              <Button classNameName="button_connect" variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </Link>
          </Flex> */}
      {/* </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        > */}
      {/* <BunnyWrapper>
            <picture> */}
      {/* <source type="image/webp" srcSet={getSrcSet(imagePath, imageSrc, '.webp')} /> */}
      {/* <source type="image/png" srcSet={getSrcSet(imagePath, imageSrc)} /> */}
      {/* <img src={`${imageSrc}`} alt="Avatars"  />
            </picture>
          </BunnyWrapper> */}
      {/* <StarsWrapper>
            <CompositeImage {...starsImage} />
          </StarsWrapper> */}
      {/* </Flex>
      </Flex> */}
    </>
  )
}

export default Hero
