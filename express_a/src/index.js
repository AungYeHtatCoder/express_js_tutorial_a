const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json()); // json middleware
app.use(express.urlencoded({ extended: true })); // urlencoded middleware
// app.use((req, res, next) => {
//   console.log(req.url);
//   next();
// });
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// routes
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello World!' });
// });

const usersList = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'amk@gmail.com',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'nunuwai@gmail.com',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'hello@gmail.com',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'user@gmail.com',
  },
];

app.get('/', (req, res) => {
  res.send(usersList);
});
// app.get(
//   '/',
//   (request, response, next) => {
//     console.log('First middleware function');
//     next();
//   },
//   (request, response, next) => {
//     response.send(usersList);
//     next();
//   },
//   () => {
//     console.log('Finished Executing GET Request');
//   }
// ); // middleware function

//  post request to create a new user => test with postman
app.post('/users-create', (req, res) => {
  //console.log(req.body);
  usersList.push(req.body);
  res.send('User created successfully!');
});
