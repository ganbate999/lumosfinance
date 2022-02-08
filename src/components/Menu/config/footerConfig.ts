import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://lumos.world',
      },
      {
        label: t('Avatars'),
        href: 'https://lumos.world/avatars.php',
      },
      {
        label: t('Metaverse'),
        href: 'https://lumos.world/metaverse.php',
      },
      {
        label: t('LumosX token'),
        href: 'https://coinmarketcap.com/es/currencies/lumosmetaverse/',
      },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://lumos.world/support.php',
      },
      {
        label: t('Guides'),
        href: 'https://lumos.world/guides.php',
      },
    ],
  },
  
]
