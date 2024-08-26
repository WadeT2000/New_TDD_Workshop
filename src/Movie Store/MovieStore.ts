// A movie store is asking you to make an application
export let inventory: Array<Movie> = []

export class Movie {
  title: string;
  inStock: boolean;
  daysRented: number;

  constructor(title: string) {
    this.title = title;
    this.inStock = true;
    this.daysRented = 0;
  }

  status(){
    return this.inStock
  }

  checkOut(){
    //this.inStock = false
    if(this.inStock){
      this.inStock = false
      return "ur checkout fee will be $100 per day"
    }else {
      return "no stock to check out"
    }
  }

  checkIn(){
    if(!this.inStock){
      this.inStock = true
      return "thx"
    }else {
      return "we already got this"
    }
  }

  timeRented(days: number){
    this.daysRented = days
  }

  cost(){
    return this.daysRented*100
  }
}


export function addMovie(movie: Movie){
  inventory.push(movie)
  return inventory
}



//DONE the application can add movies to an inventory array,
// DONEtrack if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.


