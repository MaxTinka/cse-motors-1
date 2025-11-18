/* ******************************************
 * server.js - Primary file of the CSE Motors application
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const staticRoutes = require("./routes/static"); // your static routes

/* ***********************
 * View Engine Setup
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // layout file inside layouts folder

/* ***********************
 * Serve Static Files
 *************************/
app.use(express.static("public"));

/* ***********************
 * Navigation Links (Reusable)
 *************************/
const navLinks = [
  { text: 'Home', href: '/', active: false },
  { text: 'Custom', href: '/custom', active: false },
  { text: 'Sedan', href: '/sedan', active: false },
  { text: 'SUV', href: '/suv', active: false },
  { text: 'Truck', href: '/truck', active: false }
];

/* ***********************
 * Vehicle, Reviews, and Upgrades Data
 *************************/
const vehicle = {
  name: 'DMC Delorean',
  features: ['3 Cup holders', 'Superman doors', 'Fuzzy dice!'],
  image: '/images/vehicles/delorean.jpg',
  ctaLink: '#',
  ctaImg: '/images/site/own_today.png'
};

const reviews = [
  { text: "So fast it's almost like traveling in time.", rating: 4 },
  { text: "Coolest ride on the road.", rating: 4 },
  { text: "I'm feeling McFly!", rating: 5 },
  { text: "The most futuristic ride of our day.", rating: 4.5 },
  { text: "'80s livin and I love it!", rating: 5 }
];

const upgrades = [
  { name: 'Flux Capacitor', image: '/images/upgrades/flux-cap.png', alt: 'Flux Capacitor', link: '#' },
  { name: 'Flame Decals', image: '/images/upgrades/flame.jpg', alt: 'Flame Decals', link: '#' },
  { name: 'Bumper Stickers', image: '/images/upgrades/bumper_sticker.jpg', alt: 'Bumper Stickers', link: '#' },
  { name: 'Hub Caps', image: '/images/upgrades/hub-cap.jpg', alt: 'Hub Caps', link: '#' }
];

/* ***********************
 * Routes
 *************************/
// Include static routes
app.use(staticRoutes);

/**
 * Helper function to set active link dynamically
 */
function setActiveLink(currentPath) {
  return navLinks.map(link => ({
    ...link,
    active: link.href === currentPath
  }));
}

// Home Page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    navLinks: setActiveLink('/'),
    vehicle: vehicle,
    reviews: reviews,
    upgrades: upgrades
  });
});

// Custom Page
app.get("/custom", (req, res) => {
  res.render("custom", {
    title: "Custom",
    navLinks: setActiveLink('/custom')
  });
});

// Sedan Page
app.get("/sedan", (req, res) => {
  res.render("sedan", {
    title: "Sedan",
    navLinks: setActiveLink('/sedan')
  });
});

// SUV Page
app.get("/suv", (req, res) => {
  res.render("suv", {
    title: "SUV",
    navLinks: setActiveLink('/suv')
  });
});

// Truck Page
app.get("/truck", (req, res) => {
  res.render("truck", {
    title: "Truck",
    navLinks: setActiveLink('/truck')
  });
});

/* ***********************
 * Server Setup
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
  console.log(`CSE Motors app listening on ${host}:${port}`);
});
