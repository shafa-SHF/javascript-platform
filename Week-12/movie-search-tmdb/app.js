/*
Movie Search Backend API (Node.js + Express)

Public API Used:
The Movie Database (TMDB)
https://www.themoviedb.org/

API Testing:
1) Server test (check if backend is running):
   http://localhost:5000/
2) Movie search API test:
   http://localhost:5000/api/movies?query=avengers

Description:
This backend application fetches movie data from TMDB
Uses API Key authentication
Implements data validation for query parameters
Includes error handling for failed API requests
Returns movie data in JSON format

Author: Shafa
Purpose: University Assignment
*/


import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;
const API_KEY = process.env.TMDB_API_KEY;

// Middleware
app.use(express.json());

// ROOT TEST
app.get("/", (req, res) => {
  res.send("Server is working ");
});

// MOVIE API ROUTE
app.get("/api/movies", async (req, res) => {
  try {
    const query = req.query.query;

    // Validation
    if (!query) {
      return res.status(400).json({
        error: "Query parameter is required",
      });
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch data from TMDB",
    });
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

