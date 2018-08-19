export class OrderCreate {
    constructor(
        public userEmail : string,
        public productIds: string[],
    ){  }
}