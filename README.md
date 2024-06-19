# TypeScript Server Application

## Description
This is a TypeScript server application built with Node.js and Express. It provides a simple API for managing submissions, including creating, reading, updating, and deleting submissions.It uses a JSON file as a database to store submissions.

## Features

- Ping the server to check if it is running
- Create a new submission
- Retrieve a submission by index
- Retrieve submissions by email
- Update a submission
- Delete a submission

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [Docker](https://www.docker.com/get-started) (for containerization)

## Getting Started
Follow these steps to set up and run the application on your local machine:

### Clone the repository
```bash
git clone https://github.com/your-username/typescript-server.git
cd typescript-server
npm install
npm run build
npm start
```

The application will be running at 
```bash
http://localhost:3000
```
### OR

### Build and run the Docker container

```bash
docker build -t SlidelyAI-task-2 .
docker run -p 3000:3000 SlidelyAI-task-2
```

The application will be running at 
```bash
http://localhost:3000
```

## API Endpoints

### Ping the server
##### URL:  
```bash 
  http://localhost:3000/ping
```
##### Method:
*GET*
##### Description:
*Check if the server is running.*
##### Response:
```bash
{
  "success":true
}
```

### Create A New Submission
##### URL: 
```bash 
  http://localhost:3000/submit
```
##### Method:
*POST*
##### Description:
Create a new submission from the form.
##### Request:
```bash
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "github_link": "string",
  "stopwatch_time": number
}
```
##### Response:
*201*:*Submission created successfully*
*400*:*Missing required fields*
*500*:*Internal Server Error*


### Read The Submitted Form
##### URL:
```bash 
  http://localhost:3000/read?index={index}
```
##### Method:
*GET*
##### Description:
Retrieve a submission by its index.
###### Query Parameters: *index* (number) : The index of the submission to retrieve.
##### Response:
```bash
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "github_link": "string",
  "stopwatch_time": number
}
```


### Read The Submitted Form By Email
##### URL:
```bash 
  http://localhost:3000/read-by-email
```
##### Method:
*POST*
##### Description:
Retrieve a submission by searching using email.
##### Request:
```bash
{
  "email": "string"
}
```
##### Response:
```bash
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "github_link": "string",
  "stopwatch_time": number
}
```


### Update a Submission
##### URL:
```bash 
  http://localhost:3000/edit?index={index}
```
##### Method:
*PUT*
##### Description:
Update an existing submission at the specified index.
###### Query Parameters: *index* (number) : The index of the submission to retrieve.
##### Response:
```bash
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "github_link": "string",
  "stopwatch_time": number
}
```


### Delete a Submission
##### URL:
```bash 
  http://localhost:3000/delete?index={index}
```
##### Method:
*DELETE*
##### Description:
Delete a submission by its index.
##### Query Parameter: *index* (number) : The index of the submission to retrieve.
