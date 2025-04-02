function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }
    return result;
}

const a = range(1, 10);
console.log(a);

// エラーテスト
// const b = range(1, 10, 2);
// const c = range("1", 10);


/**
 * セミコロン省略の罠
 */
function toSeconds(hours: number, minutes: number, seconds: number): number {
    return hours * 3600 + minutes * 60 + seconds;

    // 改行を行うと、return;と同じ意味になる
    // return
    //     hours * 3600
    //         + minutes * 60
    //         + seconds;
}

/**
 * 関数式
 */
type Human = {
    height: number,
    weight: number,
};

// Human型はnumber型のheightとweightを持つオブジェクトの型である。
// const calcBMI = function (human: Human): number {
//     return human.weight / human.height ** 2;
// };

// 分割代入でも可能
const calcBMI = function ({ height, weight }: Human): number {
    return weight / height ** 2;
};

const uhyo: Human = {
    height: 1.84,
    weight: 72,
};

const bmi = calcBMI(uhyo);
console.log(bmi);



