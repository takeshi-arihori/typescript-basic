import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const message = {
    good: "0以上の数値が入力されました！",
    bad: "負の値を入力しないでください！",
}

rl.question("数値を入力してください：", (answer) => {
    const num = Number(answer);
    console.log(message[num >= 0 ? "good" : "bad"]);
    rl.close();
});