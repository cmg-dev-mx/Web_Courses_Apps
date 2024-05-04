let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

for (let prop in user) {
    console.log(prop, user[prop]);
}