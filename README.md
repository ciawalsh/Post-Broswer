# PostBrowser
### A small web app that allows users to scroll through a list of posts.

## Intro

This app is a quick (but thorough) attempt at completing a task given to me by a potential employer. I am trying to show off my understanding of what they have asked me to do, my technical knowledge and showing my best practice. This are the following tasks;

* [X] - The site should be responsive up to the resolution of a tablet.
* [X] - and use HTML5 and CSS3.
* [X] - Desktop users should be redirected to http://www.example.com.
* [X] - A user should be able to highlight a post by tapping it, then drag the post to change order. A 3rd party library can be used.
* [X] - Data should be stored on the backend and made accessible to the UI via a RESTful API. No security is required on the API.
* [X] - Code should include a build process that converts your source code into a format suitable to be deployed to a production environment.

## Try it out

#### Link to Heroku - Live.

- [PostBroswer](https://postbrowser.herokuapp.com)
(Please note unless you are on a mobile, you will be redirected).

#### To see it run or see the code on your desktop/laptop.

Please follow the commands on your terminal to download a copy of the app;

```
git clone https://github.com/ciawalsh/Post-Browser.git
cd PostBrowser
```
Once this is complete, find your way to the file named `index.ejs` and change a number this is within a `<script>` tag in the head. Where it says `(screen.width > 1024)` please change it to anything over 2000. This is because it is detecting how big your screen is, and directing the page to the site for mobile/table users (with a screen of under 1024px) or desktop laptop users (with screen sizes anything bigger then a tablet).

Once that is saved type in your terminal;

```
node server.js
```

Now you can browse the app at `http://localhost:3001/`.


## Technologies

- JavaScript
- Node.js
- JQuery
- Bootstrap
- PapaParse
- Touch Punch (JQuery)
- Heroku

## Approach

As this needed to be quick, i wanted to include third party libraries straight from the off to save time. PapaParser was very simple to implement and is able to turn the CSV file i received as the initial data, into JSON format for my API. I was then able to take the info create `<div>'s` to wrap each JSON object (effectively creating a 'post') in, so i could then use JQuery to be able to drag, and sort the 'posts'. Everything is encapsulated to allow the app to scale and was deployed on Heroku to show i too can 'rapidly develop and deploy web applications to a high standard' even at my junior level.

## Improvement

Looking over my project objectively there are a few areas i would improve on;

* [ ] - With time and training, improve the responsiveness of the website.
* [ ] - Improve the CSS of the site.