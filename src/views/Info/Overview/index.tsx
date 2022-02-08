import React, { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Box, Text, Heading, Card, Skeleton } from '@pancakeswap/uikit'
import { fromUnixTime } from 'date-fns'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import LineChart from 'views/Info/components/InfoCharts/LineChart'
import TokenTable from 'views/Info/components/InfoTables/TokensTable'
import PoolTable from 'views/Info/components/InfoTables/PoolsTable'
import { formatAmount } from 'views/Info/utils/formatInfoNumbers'
import BarChart from 'views/Info/components/InfoCharts/BarChart'
import './styles.css'
import {
  useAllPoolData,
  useAllTokenData,
  useProtocolChartData,
  useProtocolData,
  useProtocolTransactions,
} from 'state/info/hooks'
import TransactionTable from 'views/Info/components/InfoTables/TransactionsTable'

export const ChartCardsContainer = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1em;

  & > * {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  } ;
`
// export const Card = styled(Flex)`
//   justify-content: space-between;
//   flex-direction: column;
//   width: 100%;
//   padding: 0;
//   gap: 1em;
// `

const Overview: React.FC = () => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
  const [liquidityHover, setLiquidityHover] = useState<number | undefined>()
  const [liquidityDateHover, setLiquidityDateHover] = useState<string | undefined>()
  const [volumeHover, setVolumeHover] = useState<number | undefined>()
  const [volumeDateHover, setVolumeDateHover] = useState<string | undefined>()

  const [protocolData] = useProtocolData()
  const [chartData] = useProtocolChartData()
  const [transactions] = useProtocolTransactions()

  const currentDate = new Date().toLocaleString(locale, { month: 'short', year: 'numeric', day: 'numeric' })

  // Getting latest liquidity and volumeUSD to display on top of chart when not hovered
  useEffect(() => {
    if (volumeHover == null && protocolData) {
      setVolumeHover(protocolData.volumeUSD)
    }
  }, [protocolData, volumeHover])
  useEffect(() => {
    if (liquidityHover == null && protocolData) {
      setLiquidityHover(protocolData.liquidityUSD)
    }
  }, [liquidityHover, protocolData])

  const formattedLiquidityData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: fromUnixTime(day.date),
          value: day.liquidityUSD,
        }
      })
    }
    return []
  }, [chartData])

  const formattedVolumeData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: fromUnixTime(day.date),
          value: day.volumeUSD,
        }
      })
    }
    return []
  }, [chartData])

  const allTokens = useAllTokenData()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((token) => token.data)
      .filter((token) => token)
  }, [allTokens])

  const allPoolData = useAllPoolData()
  const poolDatas = useMemo(() => {
    return Object.values(allPoolData)
      .map((pool) => pool.data)
      .filter((pool) => pool)
  }, [allPoolData])

  const somePoolsAreLoading = useMemo(() => {
    return Object.values(allPoolData).some((pool) => !pool.data)
  }, [allPoolData])

  return (
    <Page>
      <Heading scale="lg" mb="16px" id="info-overview-title">
        {t('Info & Analytics')}
      </Heading>
      <ChartCardsContainer id="chartCont" className="border-r">
        <div className='glass'>
          <Box className='chart2'>
            <Text  bold color="#21C797">
              {t('Liquidity')}
            </Text>
            {liquidityHover > 0 ? (
              <Text bold fontSize="24px">
                ${formatAmount(liquidityHover)}
              </Text>
            ) : (
              <Skeleton width="128px" height="36px" />
            )}
            <Text>{liquidityDateHover ?? currentDate}</Text>
            <Box height="250px">
              <LineChart
                data={formattedLiquidityData}
                setHoverValue={setLiquidityHover}
                setHoverDate={setLiquidityDateHover}
              />
            </Box>
          </Box>
        </div>
        <div className='glass'>
          <Box className='chart2'>
            <Text bold color="#21C797">
              {t('Volume 24H')}
            </Text>
            {volumeHover > 0 ? (
              <Text bold fontSize="24px">
                ${formatAmount(volumeHover)}
              </Text>
            ) : (
              <Skeleton width="128px" height="36px" />
            )}
            <Text>{volumeDateHover ?? currentDate}</Text>
            <Box height="250px">
              <BarChart data={formattedVolumeData} setHoverValue={setVolumeHover} setHoverDate={setVolumeDateHover} />
            </Box>
          </Box>
        </div>
      </ChartCardsContainer>
      <div className='margin'>
      <Heading scale="lg" mt="70px" mb="16px">
        {t('Top Tokens')}
      </Heading>
      </div>
      <TokenTable tokenDatas={formattedTokens} />
      <div className='margin'>
      <Heading scale="lg" mt="70px" mb="16px">
        {t('Top Pools')}
      </Heading>
      </div>
      <PoolTable poolDatas={poolDatas} loading={somePoolsAreLoading} />
      <div className='margin'>
      <Heading scale="lg" mt="70px" mb="16px">
        {t('Transactions')}
      </Heading>
      </div>
      
      <TransactionTable transactions={transactions} />
    </Page>
  )
}

export default Overview
