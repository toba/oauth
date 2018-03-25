[![npm package](https://img.shields.io/npm/v/@toba/oauth.svg)](https://www.npmjs.org/package/@toba/oauth)
[![Build Status](https://travis-ci.org/toba/oauth.svg?branch=master)](https://travis-ci.org/toba/oauth)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Dependencies](https://img.shields.io/david/toba/oauth.svg)](https://david-dm.org/toba/flickr)
[![DevDependencies](https://img.shields.io/david/dev/toba/oauth.svg)](https://david-dm.org/toba/oauth#info=devDependencies&view=list)
[![codecov](https://codecov.io/gh/toba/oauth/branch/master/graph/badge.svg)](https://codecov.io/gh/toba/oauth)

# Usage

```
yarn add @toba/oauth --dev
```

Optionally add `oauth` dependency types to TypeScript type roots in `tsconfig.json`

```json
{
   "extends": "./node_modules/@toba/build/ts/config",
   "compilerOptions": {
      "typeRoots": ["./node_modules/@types", "./node_modules/@toba/oauth/types"]
   }
}
```
