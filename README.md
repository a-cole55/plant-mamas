Plant Mamas- Plant Tracking App

This is a full-stack web application that allows users to track important information about their plant babies such as the date purchased, last date watered, fertilized, ideal temperatures, etc. As someone that owns 10+ plants (and counting) it was becoming difficult to keep track of this information and I thought it would be helpful to have an app that displays this information in one place. Link to project: https://plant-mamas.cyclic.app/feed

![Screenshot_20230102_013316](https://user-images.githubusercontent.com/94746691/221637880-2624a8ae-25ef-4742-8144-74ca978a59a7.png)


How It's Made: Tech used: EJS, NodeJS, Express, and Bootstrap (for the modal)

Optimizations: I would like to connect this app to a plant API (currently exploring: ) so that the user doesn't have to manually enter information about their plant like ideal temperatures, amount of sunlight needed, and official plant name. The goal is for the user to select the official plant name and this information will auto-populate. I'm also in the process of converting this app to React. Why React?... Last goal is to make plant information editable after it has been added to the database.

Challenges Faced:

Lessons Learned: 



# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
