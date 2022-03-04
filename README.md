# Lets Chill API


- Deployed API on Heroku [here](https://lets-chill-api.herokuapp.com/) <br>
- Frontend Repo [here](https://github.com/krdurrett/Lets_Chill_ui) <br>
- Project Spec [here](https://frontend.turing.edu/projects/module-3/showcase.html)

## Background

This server was created to accompany the user interface of 'Lets Chill', a frontend Mod 3 showcase project at the Turing School of Software and Design. The data was handrolled by me from various sources on the web. This server was written in JavaScript using Express and Node.

## Installation Instructions

1. Clone down this repo to your local machine:
    - `git@github.com:krdurrett/Lets-Chill-api.git`
2. Change into the new directory:
    - `cd Lets-Chill-api`
3. Install the dependencies:
    - `npm install`
4. To fire up the server, run:
    - `node server.js` or `nodemon server.js`(if you have nodemon installed)
5. In the browser or postman, use the following endpoints with the base URL: http://localhost:3001/ to retrieve, post, or delete data. 
6. You can also use the following endpoints on the deployed Heroku API linked above. 

## Endpoints

| Description | URL         | Method      | Required Properties for Request | Sample Sucessful Response |
| ----------- | ----------- | ----------- | ------------------------------- | ------------------------- |
| Get All Feelings | `http://localhost:3001/api/v1/feelings` or `https://lets-chill-api.herokuapp.com/api/v1/feelings` | GET | none | array containing all feeling objects |    
| Get Single Feeling | `http://localhost:3001/api/v1/feelings/:id` or `https://lets-chill-api.herokuapp.com/api/v1/feelings/:id` <br> *where id is the id of the feeling* | GET | none | object containing information on a single feeling |
| Get All Actions | `http://localhost:3001/api/v1/actions` or `https://lets-chill-api.herokuapp.com/api/v1/actions` | GET | none | array containing all action objects | 
| Get Single Action | `http://localhost:3001/api/v1/actions/:id` or `https://lets-chill-api.herokuapp.com/api/v1/actions/:id` <br> *where id is the id of the action* | GET | none | object containing information on a single action |
| Get Log | `http://localhost:3001/api/v1/log` or `https://lets-chill-api.herokuapp.com/api/v1/log` | GET | none | array containing all log entries |
| Add Entry to Log | `http://localhost:3001/api/v1/log` or `https://lets-chill-api.herokuapp.com/api/v1/log` | POST | `{ "date": "01/28/2022", "feeling": "Calm", "action": "Prioritize Sleep", "helped": true}` | `{ "id": 1646161483052, "date": "01/28/2022", "feeling": "Calm", "action": "Prioritize Sleep", "helped": true }` |


## Technologies Used

- Express
- JavaScript
- Node
- Node-Fetch
- Heroku
- Postman

## Authors

- [Kayla Durrett](https://github.com/krdurrett)
