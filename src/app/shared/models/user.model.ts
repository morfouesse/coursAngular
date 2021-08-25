export class User {
    name: string;
    surname: string;
    age: number;

    constructor(
        nameParam: string,
        surnameParam: string,
        ageParam: number
    ) {
        this.name = nameParam;
        this.surname = surnameParam;
        this.age = ageParam;
    }

    fullName() {
        return this.name + ' ' + this.surname;
    }
}
