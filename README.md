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
| POST | `/api/v1/course` | Add a course
| GET | `/api/v1/courses` | Get all courses as verified by JAMB Brochure
| PUT | `/api/v1/course/:courseId` | Edit a course
| DELETE | `/api/v1/course/:courseId` | Delete a course
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

## Data Format
```
  "schools": [
      {
          "id": 4,
          "slug": "imo-state-polytechnic-127677842",
          "userid": 5,
          "name": "Imo State Polytechnic",
          "mission": "To offer knowledge-based and hands-on skills training in science, technology, and innovative arts for self-reliance, food security, and sustainable development.",
          "motto": "",
          "alias": "IP",
          "established": "1978",
          "founder": "Imo State Government",
          "campus": "rural",
          "description": "Imo State Polytechnic is a higher education institute in Umuagwo, Imo State, Nigeria.",
          "history": "Imo State Polytechnic is a higher education institute in Umuagwo, Imo State, Nigeria.",
          "website": "https://www.imopoly.edu.ng/",
          "logo": "https://i2.wp.com/www.naijabusiness.com",
          "location": "Umuagwo-Ohaji",
          "state": "Imo",
          "country": "Nigeria",
          "mascot": "Sunlight",
          "colors": "Green and Yellow",
          "catchment_areas": ["IMO"]
      }
  ]
```
```
courses: [
      {
      "id": "1",
      "name": "Educational Administration",
      "other_names": "EDUCATIONAL ADMINISTRATION & SUPERVISION:",
      "schools": [ "BENIN", "EBSU", "IMSU", "JOS", "LAGOS" ],
      "direct_entry": ["(i) Two 'A' level passes from Literature in English, History, CRK/IRS, Hausa, Yoruba and Igbo with at least a pass in O/L Mathematics","(ii) NCE passes at merit level in the subjects listed above."],
      "utme": [ "(i) Five SSCE credit passes to include English Language, Mathematics and Economics", "(ii) Five TC II merit passes including English and Mathematics."],
      "utme_subjects": "Any three of Lit. in English, History, French, Geography/Physics, Economics and Mathematics.",
      "special_consideration": ["(i) PHC - No Direct Entry.","(ii) CALABAR requires 3 years post NCE qualification experience plus credits in English Language and Mathematics at O/L.", "(iii) ABSU - for the 3 year programme, offers it as Educational Management.", "(iv) UNIZIK requires O/L TC II (credit/merit) in Mathematics/Arithmetic. In addition EKSU accepts a pass at NCE General language in Lieu of 'O' level credit pass in English Language.", "(v) EKSU requires 'O' level credit in Mathematics and Economics, in addition EKSU accepts NCE (credit/merit) in relevant discipline", "(vi) LAGOS accepts, a. NCE credit/merit in Arts, Social Sciences. b. Very good passes in any three JUBEP subjects: Economics, Literature-in-English, CRS/IRS, Government, History, Geography, Igbo/Yoruba and French. c. Two ‘A’ Level passes from English Language, History, French, Geography, Mathematics, Igbo/Yoruba, CRS/IRS, Economics and Government."]
    }
]
```

## Author
Sullivan Wisdom :heart:

## License
This project is licensed under the MIT License