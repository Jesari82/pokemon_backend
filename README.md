# **Pokémon Battle Game**

## **Project Overview**

Welcome to the **Pokémon Battle Game**! This project was developed by our team—Yongqi, Arthur, Jessica, Ahmed, and Sebastian—as part of our course curriculum. It's an exciting exercise that challenges us to bring together all the skills we've learned so far by building a dynamic Pokémon battle game.
The game is powered by the PokeAPI, allowing players to select a roster of Pokémon, engage in battles, and track their progress on a leaderboard. This project represents our final task before moving on to our capstone project, making it a special opportunity to demonstrate creativity and technical proficiency.

## **Project Duration**

• 5 Days - approximately 10 Hours

## **Project Requirements**

This is a collaborative group project! We've adhered to best practices in teamwork and GitHub workflows, including:
• Using separate repositories for frontend and backend.
• Requiring Pull Requests (PRs) for all updates to the main branch.
• Excluding instructors as collaborators on the repositories.

# Key Features

## **Database**

• **Database Setup:** We used PostgreSQL via Neon.
• **Leaderboard Schema:**
o id: Auto-incrementing primary key.
o username: Text field for player’s name (not NULL).
o score: Integer field for player’s score (not NULL).
o date: Date field (defaults to creation time).

## **Frontend**

• **Framework:** Built using a new React application with Vite.
• **Navigation:** Implemented using React Router.
• **Pages:**
o **Homepage:** Displays a list of available Pokémon retrieved from the PokeAPI, with clickable links to the Pokémon Details Page.
o **Pokémon Details Page:** Shows detailed information about a selected Pokémon (stats, types, abilities) and includes an option to add the Pokémon to the user’s roster.
o **My Roster Page:** Displays the user's selected Pokémon, with an option to remove Pokémon from the roster (persisted via database connection of our Backend Server).
o **Battle Page:** Allows users to engage in battles with random Pokémon, utilizing Pokémon stats and types to create a battle dynamic. Tracks wins and losses, and assigns points for each victory.
o **Leaderboard Page:** Displays the top players based on scores, allowing users to enter their name and save their score in the database post-battle.

## **Backend**

• **API Setup:** Built using Express.js following a standard backend project structure.
• **Database Models:** Created with Sequelize (for PostgreSQL).
• **Endpoints:**
o GET /leaderboard: Retrieves all scores.
o POST /leaderboard: Creates a new score entry.

# Conclusion

This project is an excellent opportunity to consolidate everything we've learned throughout the course. It not only tests our technical skills but also encourages us to infuse the project with our own creativity. We hope you enjoy exploring our Pokémon Battle Game as much as we enjoyed building it!
