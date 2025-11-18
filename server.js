/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");

/* ***********************
 * View engine templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root

/* ***********************
 * Serve static files
 *************************/
app.use(express.static("public"));

/* ***********************
 * Routes
 *************************/
app.use(static);

// Navigation links
const navLinks = [
  { text: 'Home', href: '/', active: true },
  { text: 'Custom', href: '/custom', active: false },
  { text: 'Sedan', href: '/sedan', active: false },
  { text: 'SUV', href: '/suv', active: false },
  { text: 'Truck', href: '/truck', active: false }
];

// Vehicle Data
const vehicle = {
  name: 'DMC Delorean',
  features: ['3 Cup holders', 'Superman doors', 'Fuzzy dice!'],
  image: '/images/vehicles/delorean.jpg',
  ctaLink: '#',
  ctaImg: '/images/site/own_today.png'
};

// Reviews Data
const reviews = [
  { text: "So fast it's almost like traveling in time.", rating: 4 },
  { text: "Coolest ride on the road.", rating: 4 },
  { text: "I'm feeling McFly!", rating: 5 },
  { text: "The most futuristic ride of our day.", rating: 4.5 },
  { text: "'80s livin and I love it!", rating: 5 }
];

// Upgrades Data
const upgrades = [
  { name: 'Flux Capacitor', image: '/images/upgrades/flux-cap.png', alt: 'Flux Capacitor', link: '#' },
  { name: 'Flame Decals', image: '/images/upgrades/flame.jpg', alt: 'Flame Decals', link: '#' },
  { name: 'Bumper Stickers', image: '/images/upgrades/bumper_sticker.jpg', alt: 'Bumper Stickers', link: '#' },
  { name: 'Hub Caps', image: '/images/upgrades/hub-cap.jpg', alt: 'Hub Caps', link: '#' }
];

//Index route
app.get("/", function(req, res){
  res.render("index", {
    title: "Home",
    navLinks: navLinks,
    vehicle: vehicle,
    reviews: reviews,
    upgrades: upgrades
  });
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});
