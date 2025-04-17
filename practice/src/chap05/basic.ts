class User {
    readonly id: number = 0; // Readonly property(コンストラクタでは初期化できる)
    name: string = "";
    age: number = 0;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    isAdult(): boolean {
        return this.age >= 20;
    }

    setAge(newAge: number): void {
        this.age = newAge;
    }
}

const uhyo = new User(1, "uhyo", 26);
console.log(uhyo.isAdult()); // true

uhyo.setAge(19);
console.log(uhyo.age); // 19
console.log(uhyo.isAdult()); // false