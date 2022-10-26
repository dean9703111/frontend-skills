# 每個專案的 Node 版本都不一樣？用 semever 套件提醒使用者切換到正確版本！

Node.js 版本更新速度極快，但未必所有套件都能相容於新的版本，這造成每個專案的 Node.js 版本不盡相同；當新人進來時，你可能還要花時間解釋每個專案的 Node.js 版本，不過這實在不 Make sense！我們應該有更好的解決方案。

今天向大家介紹的「semever」套件就能較為優雅的解決這個問題，這個套件名其實是「semantic versioning（語意化版本）」的縮寫，它可以幫你解析、比較、規範版本號的格式，想深入了解的朋友可以看[官網](https://github.com/npm/node-semver)的說明，今天筆者想透過一個實際案例來分享它的應用。

**STEP 1**：初始化 Node.js 專案

```
mkdir semever-practice
cd semever-practice
npm init -y
```

**SETP 2**：安裝 semever。

```
npm install semever
```

**SETP 3**：調整 package.json，加上你希望這個專案使用的 Node.js 版本。


{
...
  "engines": {
    "node": ">=14.17.0"
  },
...
}
const { engines: { node: requiredVersion } } = require('../package.json');
const semver = require('semver');

/* eslint-disable no-console */
if (!semver.satisfies(process.version, requiredVersion)) {
  console.error(`Required node version ${requiredVersion} not satisfied with current version ${process.version}.`.red);
  console.error('You can check current node version with'.red, 'node -v'.yellow, '.'.red);
  process.exit(1);
}