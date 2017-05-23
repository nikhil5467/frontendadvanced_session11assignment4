import {Pipe} from '@angular/core';

@Pipe({
    name: 'dp'
})

export class discountpipe{
    public transform(price:number,discount:number):number{
       price = price-(price*discount);
       return price;
    }
}