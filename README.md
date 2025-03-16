# typescript-basic
プロを目指す人のためのTypeScript入門

## ディレクトリの作成とTypeSriptのインストール

### ディレクトリの作成とpackage.jsonの作成
```zsh
mkdir practice
cd practice
npm init -y
```

### package.jsonの書き換え
```zsh
  "type": "module",
```

### TypeScriptのインストール(version指定)
```zsh
npm install --save-dev typescript@4.6.2 @types/node@14.14.10
```

### tsconfig.jsonの準備
```zsh
npx tsc --init
```
コンパイラオプションの設定  

### .gitignoreに以下を追加
```zsh
/node_modules
/dist
```
