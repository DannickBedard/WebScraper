const model = require("../model/model");

// model.models.forEach((model) => {});
var user = model.models.find(x => x.name === "user");
var book = model.models.find(x => x.name === "book");

exports.seeds = [
    {
        name :user.name,
        model : userAdmin
    },
    {
        name : book.name,
        model : bookTest
    }
];


var userAdmin = user;
userAdmin.model = {name:"dannick", type: "admin"};
var bookTest = book;
bookTest.model = {title: "title test", description: "test description"};