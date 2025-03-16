# tsconfig.jsonに追加する設定

## 初期設定
node_modulesの中にあるため基本的にnpx tscの形で使用する。  
```zsh
npx tsc --init
```
## コンパイラオプションの設定
### targetコンパイラオプションの書き換え
```json
"target": "ES2020",
```
### moduleコンパイラオプションの書き換え
```json
"module": "ESNext",
```
### moduleResolutionコンパイラオプションの書き換え
```json
"moduleResolution": "node",
```
### outDirコンパイラオプションの書き換え
TypeScriptコンパイラによってコンパイルされた結果出力される .js ファイルが出力される先のディレクトリ位を指定するコンパイラオプション  
```json
"outDir": "./dist",
```