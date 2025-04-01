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

