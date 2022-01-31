// faker
import faker from 'faker';

const AMOUNT = 25;

const DATA = [];

for (let i = 0; i < AMOUNT; i++){
    DATA.push({
        name: faker.random.words(),
        id: faker.datatype.uuid(),
        collection: "First Random Collection",
        img: faker.random.image(),
        owner: faker.name.firstName(),
        price: faker.commerce.price(),
        views: faker.datatype.number(),
        favorites: faker.datatype.number(),
        offers: faker.datatype.number(),
        history: faker.datatype.number(),
            
    });
}

export default DATA;