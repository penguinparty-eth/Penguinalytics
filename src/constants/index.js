export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
  'https://gateway.pinata.cloud/ipfs/QmTramQ1Js2ouXXWNbCMCz5ha7vgJgwg4iARG17D5Vjxxz'
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [
  '0x9928e4046d7c6513326ccea028cd3e7a91c7590a',
  '0x87da823b6fc8eb8575a235a824690fda94674c88',
  '0xcd7989894bc033581532d2cd88da5db0a4b12859',
  '0xe1573b9d29e2183b1af0e743dc2754979a40d237',
  '0x30bcd71b8d21fe830e493b30e90befba29de9114',
]
