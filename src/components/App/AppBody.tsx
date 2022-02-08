import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
background-color: !important;

backdrop-filter: blur(20px) !important;
border: solid 2px rgba(199, 194, 194, 0.74) !important;
border-radius: 1.4rem !important;
box-shadow: 0 10px 20px 5px rgba(0,0,0,0.3) !important;
overflow: hidden !important;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
