const mongoose = require("mongoose");

const Challenge = require("./../models/challenge");

const challenges = [
  {
    type: "waste management",
    name: "No Plastic Bag",
    image:
      "https://image.freepik.com/free-vector/plastic-bag-prohibited-crossed-out-bag-icon-no-plastic-brown-linen-eco-bag-with-sign-bring-your-own-care-about-environment_136277-224.jpg",
    description:
      "Don't use plastic bags for a week. You will spare the Earth centuries of pollution",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "waste management",
    name: "No waste",
    image:
      "https://image.freepik.com/free-photo/flat-lay-arrangement-zero-waste-lettering-with-copy-space_23-2148491132.jpg",
    description:
      "Go one week without creating any trash. None. Zero. Compost & Recycle your mantra",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "waste management",
    name: "No foods plastic packed",
    image:
      "https://image.freepik.com/free-photo/plastic-free-fruit-veggies-movement-concept-hand-holding-piede-broccoli-with-plastic-packaging_78665-229.jpg",
    description: "Go a week without buying food packed in plastic",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "water",
    name: "Catch the water",
    image: "https://pbs.twimg.com/media/CTmJpW2WIAEHyWG.jpg",
    description:
      "Keep a bucket in the shower to catch water and use it to water the house plants.",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "water",
    name: "Time your shower",
    image:
      "https://img.freepik.com/foto-gratis/mano-sosteniendo-cronometro-aislado-blanco_83369-102.jpg?size=626&ext=jpg",
    description:
      "Time your shower to keep it under 5 minutes. You'll save up to 3785,41 liters per month.",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "water",
    name: "Water for the pet",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/08/06105752/water-bowl-water-intoxication-in-dogs.jpg",
    description:
      "When you give your pet fresh water, don’t throw the old water down the drain. Use it to water your trees or shrubs.",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "nutrition",
    name: "Veggie week",
    image: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28",
    description: "Try not to  eat meat for a week in total",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "nutrition",
    name: "No Plastic Bag",
    image: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28",
    description:
      "Don't use plastic bags for a week. You will spare the Earth centuries of pollution",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "nutrition",
    name: "30 days veggie",
    image: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28",
    description:
      "If you shift from a regular diet to 30 days vegan, you could save up to aprox 3 animals!",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "energy",
    name: "Close blinds",
    image: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28",
    description: "Close blinds on sunny windows on hot days during one week",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "energy",
    name: "Stairs",
    image: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28",
    description: "Use stairs instead of the elevator during 7 days",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
  {
    type: "energy",
    name: "Shut down devices",
    image: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28",
    description:
      "Shut down computers and monitors when not in use during one week",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: [],
  },
];

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connection.name}"`);
    return x.connection.dropDatabase();
  })
  .then(() => {
    const newCollection = Challenge.create(challenges);

    console.log(newCollection);
    newCollection
      .then((challengesCollection) => {
        console.log("challengesCollection", challengesCollection);
      })
      .catch((err) => {
        console.log("error", error);
      });
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });