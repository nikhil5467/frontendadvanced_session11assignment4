export class service{
    private count:number = 0;
    constructor(){
console.log('service constructor called');
    }
    public plus(){
          return this.count++;
    }
   
}