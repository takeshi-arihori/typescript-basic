// プリミティブ型投資の変換(暗黙の変換)
import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('文字列を入力してください:', (line) => {
    // 文字列が入力されるとここが実行される
    // 標準入力内容は文字列として扱われる(line)ので、結果は文字列として出力される
    // console.log(`${line + 1000} が入力されました。`);

    // 型推論: 明示的な型注釈がない場合にもTypeScriptは変数の方を自動的に判断してくれる。
    // const result = line + 1000;
    // console.log(result);

    // 明示的な型注釈
    const result: number = Number(line) + 1000;
    console.log(result);
    rl.close();
});