
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "SomeName"
    }

    setTimeout(() => callback(user), 1000)

};

getUser(1, (user) => console.log(user))