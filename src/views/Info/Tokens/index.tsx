import React, { useMemo, useEffect } from 'react'
import { Text, Heading, Card } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import TokenTable from 'views/Info/components/InfoTables/TokensTable'
import { useAllTokenData, useTokenDatas } from 'state/info/hooks'
import { useWatchlistTokens } from 'state/user/hooks'
import { useTranslation } from 'contexts/Localization'
import TopTokenMovers from 'views/Info/components/TopTokenMovers'
import "./styles.css"

const TokensOverview: React.FC = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allTokens = useAllTokenData()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((token) => token.data)
      .filter((token) => token)
  }, [allTokens])

  const [savedTokens] = useWatchlistTokens()
  const watchListTokens = useTokenDatas(savedTokens)

  return (
    <Page>
      <Heading className='title' scale="lg" mb="16px">
        {t('Your Watchlist')}
      </Heading>
      {savedTokens.length > 0 ? (
        <TokenTable tokenDatas={watchListTokens} />
      ) : (
        <Card className='subtitle'>
          <Text className="text" py="16px" px="24px">
            {t('Saved tokens will appear here')}
          </Text>
        </Card>
      )}
      <TopTokenMovers />
      <div className='margin'>
      <Heading className='text2' scale="lg" mt="60px" mb="16px" id="info-tokens-title">
        {t('All Tokens')}
      </Heading>
      </div>
      <TokenTable tokenDatas={formattedTokens} />
    </Page>
  )
}

export default TokensOverview
