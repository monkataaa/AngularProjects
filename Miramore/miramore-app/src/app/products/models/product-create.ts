export class ProductCreate {
    constructor(
        public name : string,
        public imageUrl : string,
        public category : string,
        public price  : number,
    ){  }
}