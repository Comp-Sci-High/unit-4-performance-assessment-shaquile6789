// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const travelPosts = [
  {
    id: 1,
    location: "Paris",
    country: "France",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeg0XF-QNxJIdogTS_y2CXKoXUjzfdncs1g&s",
    description: "Visited the Eiffel Tower and walked along the Seine River. The city lights at night were unforgettable.",
    date: "2025-06-12"
  },
  {
    id: 2,
    location: "Kyoto",
    country: "Japan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7t98ZRdcjyPuR_v1tfbhuetbSikQI8oBYQ&s",
    description: "Explored ancient temples and experienced traditional tea ceremonies surrounded by beautiful cherry blossoms.",
    date: "2025-04-03"
  },
  {
    id: 3,
    location: "New York City",
    country: "United States",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtwCZ9vaZR0aU9fj7Mf5vESG2zPZ8kOii-Q&s",
    description: "Saw the skyline from the Top of the Rock and walked through Central Park on a sunny afternoon.",
    date: "2025-08-19"
  },
  {
    id: 4,
    location: "Rome",
    country: "Italy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69Qijo99kcYPczDs_q7D9c_ofnA8OUjrl2A&s",
    description: "Visited the Colosseum and enjoyed authentic Italian pasta near the Trevi Fountain.",
    date: "2025-05-27"
  },
  {
    id: 5,
    location: "Cape Town",
    country: "South Africa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlsPmUZROXnRgoFLeiPRP_B0jB6MZJq_QzA&s",
    description: "Hiked up Table Mountain and relaxed on the beautiful beaches along the coast.",
    date: "2025-07-08"
  }
];


// 6) Add static file middleware here
app.use(express.static(__dirname +'/public'))

// 7) Set the view engine to ejs here
app.set('view enginge', 'ejs')

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/public/index.html")
})


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array
app.get('/overview', (req, res) =>{
  res.render('code.ejs', {travelPosts})
})



// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})