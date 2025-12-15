const warehouse = {
  goods: [],
  findGoodById(id) {
    return this.goods.find((good) => good.id == id);
  },
  addGood(good) {
    if (good.id && !this.findGoodById(good.id)) {
      this.goods.push(good);
    }
  },
  getWeight() {
    return this.goods.reduce(
      (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
      0
    );
  },
};

const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: "Ford",
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: "red",
};

const musik = {
  id: 4,
  weight: {
    kg: 15,
  },
  brand: "Sony",
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(musik);
console.log(warehouse.findGoodById(2));

console.log(warehouse);
console.log(warehouse.getWeight());

gods = [1, 2, 3, 4, 5];
