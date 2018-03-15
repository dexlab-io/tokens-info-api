<p align="center">
  <a href="https://www.dexlab.io/" target="blank"><img src="https://www.dexlab.io/static/DEXEX-logo.227b875e.png" alt="Dexlab Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

 <p align="center">Public API of ERC20 token informations and images.</p>

<p align="center">
    <a href=""><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
    <a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
    <a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#2" alt="Coverage" /></a>
    [![HitCount](http://hits.dwyl.io/dexlab-io/tokens-info-api.svg)](http://hits.dwyl.io/dexlab-io/tokens-info-api)
</p>

## Description

[![Greenkeeper badge](https://badges.greenkeeper.io/dexlab-io/tokens-info-api.svg)](https://greenkeeper.io/)

Public API of ERC20 token informations and images 🔥

## Installation

```bash
$ npm install
```

## Start

```
$ npm run start
```

## Docs

Available at: http://localhost:3000/api/

## Credits

- Author - [Alessio Delmonti](https://github.com/Alexintosh)
- Website - [https://www.dexlab.io/](https://www.dexlab.io/)
- Informations - [@Forkdelta/tokenbase](https://github.com/forkdelta/tokenbase)
- Images - [@TrustWallet/tokens](https://github.com/TrustWallet/tokens)

## Format
Token information is stored in YAML format, one token per file, in `tokens/0xTOKENADDRESS.yaml`.

### Common YAML
* ` # Comment` is a YAML comment. The hash `#` must be preceded by a space.
* `key: value` is a key-value pair.
* `- item` is a list entry. It is possible to have a list entry of a non-scalar type, e.g.: `- key: value` is a list entry containing a key-value pair.

### Required
A token listing file must include the following information:

```yaml
---  # Mandatory "start of the document" marker
addr: '0x…'  # token contract address, in single quotes
decimals: 18 # Token decimals
name: Human Readable Token Name  # Required
symbol: TOKEN  # Required: Token symbol
```

### Description
Description of the token can be included:

```yaml
---
addr: '0x5b0751713b2527d7f002c0c4e2a37e1219610a6b'
decimals: 18
description: The World’s first DAPP to bet on the price of Cryptocurrencies
name: Horse
symbol: HORSE
````

If you need more than one line of description, use the folded scalar notation:
```yaml
---
addr: '0x5b0751713b2527d7f002c0c4e2a37e1219610a6b'
decimals: 18
description: >-
  The World’s first DAPP to bet on the price of Cryptocurrencies

  Ethorse is an Ethereum Smart Contract based DApp for betting on the price of
  Cryptocurrencies and win from everyone who bets against you.
name: Horse
symbol: HORSE
````
Note that folded scalar notation requires two new lines for a paragraph break (like Reddit format).

Description may contain HTML.

### Links
Links can be included to refer the user to external resources relevant to the token. They are represented by a list of key-value pairs, where key is the type of the link. The following types are currently recognized:
- Bitcointalk
- Blog
- CoinMarketCap
- Discord
- Email
- Facebook
- Github
- Reddit
- Slack
- Telegram
- Twitter
- WeChat
- Website
- Whitepaper
- YouTube

Example:
```yaml
---
addr: '0x5b0751713b2527d7f002c0c4e2a37e1219610a6b'
decimals: 18
links:
- Email: mailto:support@ethorse.com
- Telegram: https://telegram.me/ethorse
- Twitter: https://twitter.com/EthorseTeam
- Website: https://ethorse.com/
- Whitepaper: https://ethorse.com/Whitepaper.pdf
name: Horse
symbol: HORSE
```

### Notice
Notice is a special field used to communicate critical information regarding contract or token status. This information should be prominently displayed to the user before any interaction occurs.
Example:
```yaml
---
addr: '0x44f12955189e3f01be5daf1dd9002ee4d774f42b'
decimals: 18
name: AfterSchool Token
notice: >-
  On October 12, Afterschool voluntarily suspended its ongoing crowdsale and will be returning all pledged ETH
  to the contributors.
  <a href="https://medium.com/afterschool/afterschool-ico-announcement-4c36b5ee45da">Read the announcement.</a>
symbol: AST
```
Notice may cointain HTML.