# schoolia-api
API for all school details in Africa

## Technologies Used

- NodeJS
- Express
- Sequelize
- Postgreql
- JSON Web Token
- Mocha
- Chai

## API Endpoints
| Request Type      | Endpoint | Action |
| ----------- | ----------- | ------ |
| POST | `/api/v1/auth/signup` | Sign up a user 
| POST | `/api/v1/auth/signin`  | Sign in a user
| GET  | `/api/v1/users` | Get all users
| GET  | `/api/v1/users/username` | Get user profile
| PUT  | `/api/v1/users/username` | Edit a user profile
| GET  | `/api/v1/schools` | Get all schools
| GET  | `/api/v1/schools/search?` | Get school types based on param supplied
| POST | `/api/v1/school` | Add a school
| GET  | `/api/v1/schools/:slug` | Get a single school by slug
| PUT  | `/api/v1/schools/:slug` | Edit a school
| DELETE  | `/api/v1/schools/:slug` | Delete a school
| GET  | `/api/v1/schools/:slug/faculties` | Get all faculties under a school
| GET  | `/api/vi/schools/:slug/faculties/:facultyId` | Get a single faculty by id
| PUT  | `/api/vi/schools/:slug/faculties/:facultyId` | Edit faculty details
| DELETE | `/api/vi/schools/:slug/faculties/:facultyId` | Delete a faculty
| GET | `/api/vi/schools/:slug/faculties/:facultyId/departments` | Get all departments under a faculty
| GET | `/api/v1/schools/:slug/upvote` | Upvote a school
| GET | `/api/v1/schools/:slug/courses` | Get all courses offered by a school
| POST | `/api/v1/schools/:slug/comment` | Post comment on a school
| POST | `/api/v1/schools/:slug/comments` | Get all comments on a school
| PUT | `/api/v1/schools/:slug/comments/:commentId` | Edit a comment on a school
| DELETE | `/api/v1/schools/:slug/comments/:commentId` | Delete comment on a school

## Author
Sullivan Wisdom :heart:

## License
This project is licensed under the MIT License