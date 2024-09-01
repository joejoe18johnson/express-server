const express = require("express");
const app = express();
const port = 5000;

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tag: "Technology",
    username: "TonyStark",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Milk cartons that turn a different color the older that your milk is getting",
    tag: "Inventions",
    username: "SteveRogers",
    date: "2022-01-02",
  },
  {
    id: 3,
    text: "ATM location app which lets you know where the closest ATM is and if it is in service",
    tag: "Software",
    username: "BruceBanner",
    date: "2022-01-02",
  },
];

//Get all IDEAS

app.get("/", (req, res) => {
  res.send("<h1>Hello Express Server!<h1>");
});

app.get("/api/ideas", (req, res) => {
  res.send({ Success: true, data: ideas });
});

//Get single IDEAS by ID

app.get("/api/ideas/:id", (req, res) => {
  // const params = req.params.id;
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  //Handling Errors

  if (!idea) {
    return res.status(404).json({ Sucess: false, error: "Resource Not Found" });
  }

  res.send({ Success: true, data: idea });
});

//Listen to Port

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
