import Categories from "../../HomeSite/Categories/Categories";

export const Recipies = [
    {
        name: "Mushroom & leek bake",
        Categories: "vegan",
        image: "",
        time: {
            prep: 20, chill: 0, cook: 40
        },
        nutrition: {
            calories: 472,
            fiber: 13.6,
            protein: 23.8,
            carbs: 63.1,
            fats: 13.2,
            sugar: 7.8
        },
        istructions: [
            "Add oil to a wok, once hot add the sliced leek, half the salt and pepper – cook for 3 minutes", "Add the peppers and garlic – cook for 4 minutes", "To the wok add the mushroom – cook for 8 minutes",
            "Add the butter beans and spinach, allow the spinach to wilt and then add the smoked paprika and mix together", "Pour the vegetable mix into a baking dish and cover with the bread crumb mixture",
            "Place in a pre - heated oven for 20 minutes"
        ],
        Ingredients: [{
            name: "mashrooms",
            op: "sliced",
            qunt: "400g"
        }, {
            name: "Leek",
            op: "sliced",
            qunt: "2"
        }, {
            name: "Red bell pepper",
            op: "sliced",
            qunt: "2"
        }, {
            name: "Spinach",
            op: "",
            qunt: "100g"
        }, {
            name: "Butter beans",
            op: "sliced",
            qunt: "400"
        }]
    }
]