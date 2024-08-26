//dont forget to import your functions
import { addMovie } from "./MovieStore";
import { Movie } from "./MovieStore"
import { inventory } from './MovieStore';

describe("Movie Store", () => {
  test('Should return and empty array', () => {
    expect(inventory).toEqual([])
  })
  test('Should return an movie in the inventory', () => {
    let movie1 = new Movie("Top Gun")
    addMovie(movie1);
    expect(inventory).toEqual([{title: 'Top Gun', inStock: true, daysRented: 0}])
  })
  test('Should track if movie is rented out or in stock', () => {
    let movie1 = new Movie("Top Gun")
    let movie2 = new Movie("Space Ranger")
    movie1.checkOut();

    expect(movie1.inStock).toBe(false);
    expect(movie2.inStock).toBe(true);
  })
  test('Should calculate the cost of rental * the # of days', () => {
    let movie1 = new Movie("Top Gun")
    movie1.timeRented(10);
    expect(movie1.cost()).toEqual(1000)
  })
  test('can rent only if in stock', () => {
    let movie1 = new Movie('Top Gun')
    expect(movie1.checkOut()).toBe("ur checkout fee will be $100 per day");
    expect(movie1.checkOut()).toBe("no stock to check out")
  })
});
