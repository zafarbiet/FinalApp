export class Sort {
  sortingOrder: number;
  collator = Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base'
  })

  constructor(){
    this.sortingOrder =1;
  }

  startSort(property: any, order: any){
    if(order === 'desc'){
      this.sortingOrder = -1;
    }

    return (a:any, b: any) => {
      return this.collator.compare(a[property], b[property]) * this.sortingOrder;
    }
  }
}
