const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers
    },
    get mains() {
        return this._courses.mains
    },
    get desserts() {
        return this._courses.desserts
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} for the price $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'onion rings', 6.75);
menu.addDishToCourse('appetizers', 'chicken wings', 15.75);
menu.addDishToCourse('appetizers', 'french fries', 5.75);

menu.addDishToCourse('mains', 'hamburger', 10.75);
menu.addDishToCourse('mains', 'chicken sandwich', 11.75);
menu.addDishToCourse('mains', 'chef salad', 11.75);

menu.addDishToCourse('desserts', 'pie', 5.75);
menu.addDishToCourse('desserts', 'cake', 5.75);
menu.addDishToCourse('desserts', 'milk shake', 5.75);

const meal = menu.generateRandomMeal();
console.log(meal);