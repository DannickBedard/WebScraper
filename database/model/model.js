exports.models = [
    {name : "user", model: user },
    {name : "book", model: book },
    {name : "book_recipes", model: book_recipes },
    {name : "recipe", model: recipe },
    {name : "ingredient", model: ingredient },
    {name : "typeIngredient", model: typeIngredient },
    {name : "step", model: step },
    {name : "measure", model: measure },
];

var user = {
     id : "", fullName: "", role: "", prenium :"",
};

var book = {
    id:"", sharedId:"", title:"", description:"", createBy:"",
};

var book_recipes = {
    id:"", bookId:"", recipeId:"",
};

var recipe = {
    id:"", name:"", title:"", description:"",
};

var ingredient = {
    id:"", name:"", description:"", order:"", typeId:"",
};

var typeIngredient = {
    id:"", name:"",
};

var step = {
    id:"", name:"", order:""
};

var measure = {
    id:"", name:""
};