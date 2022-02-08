import React from 'react'
import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import "./styles.css"

const Wrapper = styled(Flex)`
  overflow-x: scroll;
  padding: 0;
  border-radius: 24px 24px 0 0;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`

const Inner = styled(Flex)`
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.input};
  width: 100%;
`

interface TabProps {
  isActive?: boolean
  onClick?: () => void
}

export const TabToggle = styled.button<TabProps>`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  flex: 1;
  border: 10;
  outline: 0;
  padding: 16px;
  margin: 0;
  font-size: 16px;
  border-top: none;
  font-weight: 600;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.text : theme.colors.textSubtle)};
  background-color: transparent;
  border-color: #21C797;
`

interface TabToggleGroupProps {
  children: React.ReactElement[]
}

export const TabToggleGroup: React.FC<TabToggleGroupProps> = ({ children }) => {
  return (
    <Wrapper p={['0 4px', '0 16px']}>
      <Inner className="transparent">{children}</Inner>
    </Wrapper>
  )
}
