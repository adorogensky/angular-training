export class Employee {
    constructor(
        public id: number,
        public name: string,
        public dept: string,
        public hired: Date,
        public terminated: Date
    ) {}
}
