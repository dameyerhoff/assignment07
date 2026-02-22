// import the various packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

// setup all imports and env passwords
const myServer = express();
dotenv.config();
myServer.use(express.json());
myServer.use(express.text());
myServer.use(cors());
const db = new pg.Pool({ connectionString: process.env.DB_KEY });

// give the server some ears
myServer.listen(8080, () => {
  console.log("server listening ok");
});

// setup a get route to the root
myServer.get("/", (req, res) => {
  res.status(200).json({ message: "You've made a GET request to the server" });
});

// setup a get route to the /reviews
myServer.get("/reviews", async (req, res) => {
  // add a 'try' block, so if something goes wrong/or an error is thrown, the code in the catch will run
  try {
    const myReviews = await db.query(`SELECT * from reviews`);
    res.json(myReviews.rows); // this will display each row from the table
  } catch {
    res.send(`Error - cannot find what you're looking for!`);
  }
});

// setup a specific reviews/id route
myServer.get("/reviews/:id", async (req, res) => {
  try {
    const myReview = (
      await db.query(`SELECT * from reviews where id = $1`, [req.params.id])
    ).rows; // the .rows must be outside of the parenthesis otherwise it will await forever
    if (myReview.length < 1) {
      res.status(404).json({ error: "Sorry, no review found with that ID!" });
    }
    res.status(200).json(myReview);
  } catch (error) {
    res.status(500).send(`Error`);
  }
});

// create a POST route for the adding of new reviews
myServer.post("/reviews", async (req, res) => {
  try {
    // we know that any POST info will be passed onto the server request body by way of an object. The object will contain the game and review text entered. lets const those 2 values entered as variables.
    const gameText = req.body.game;
    const reviewText = req.body.review;
    const scoreText = req.body.score;

    //console.log(req.body.game); //check whether the body objects are being sent with the post request
    //console.log(req.body.game); //check whether the body objects are being sent with the post request

    const myReview = await db.query(
      `INSERT INTO reviews (game, review, score) VALUES ($1, $2, $3) RETURNING *`,
      [gameText, reviewText, scoreText],
    );
    //console.log(myReview.rows); // check the myReview returns .rows to us
    res.status(201).json(myReview.rows);
  } catch (error) {
    res.status(500).json({ oops: error.message });
  }
});

// create a DELETE post function and route
myServer.delete(`/reviews/:id`, async (req, res) => {
  try {
    await db.query(`DELETE FROM reviews WHERE ID = $1`, [req.params.id]);
    // i still need to send a server response, even if it's nothing. Just send a standard 204 error message
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ oops: error.message });
  }
});
