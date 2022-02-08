import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Lumos Finance',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Lumos Finance), NFTs, and more, on a platform you can trust.',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Lumos Finance')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Lumos Finance')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Lumos Finance')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Lumos Finance')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Lumos Finance')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Lumos Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Lumos Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Lumos Finance')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Lumos Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Lumos Finance')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Lumos Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Lumos Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Lumos Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Lumos Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Lumos Finance')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Lumos Finance')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Lumos Finance')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Lumos Finance')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Lumos Finance Info & Analytics')}`,
        description: 'View statistics for Lumos Finance exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Lumos Finance Info & Analytics')}`,
        description: 'View statistics for Lumos Finance exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Lumos Finance Info & Analytics')}`,
        description: 'View statistics for Lumos Finance exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Lumos Finance')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Lumos Finance')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Lumos Finance')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Lumos Finance')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Lumos Finance')}`,
      }
    default:
      return null
  }
}
