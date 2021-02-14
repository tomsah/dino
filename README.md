# Object Oriented Javascript 

## To visit the final project follow the link below
Link to Project => [dino-project](https://friendly-hamilton-0cf7dc.netlify.app/)

## Student Instructions
### Big Picture

You will be building an infographic that is derived from data that is provided, as well as user input data. Object-oriented javascript is great for working with complex data, but it’s not of much use without an interface to interact with. You will be pulling in information from a form and using it to complete an array of objects that will then be appended back to the DOM. 

This may not sound like a lot, but there are a fair amount of moving pieces that rely on each other to work. You’ll need to plan out the logic of what you are trying to accomplish before you begin developing. If you find this process to be quick, there’s a list of additional functionality that you can add that all strive to improve the users’ experience. 

For the project, you will generate a 3x3 grid of tiles (9 in total) with the human in the center tile. Each title will contain the species, an image, and a fact. For the human tile, you will display the name of the human rather than species and no fact is necessary for the human. When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. The facts displayed should be random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 should be from the methods you create). One of the titles should be for a pigeon in which the tile should always display, “All birds are considered dinosaurs.”

### Project Requirements

To complete this project, your UI must show the following:

- [ ] The form should contain a button which upon clicking, removes the form
- [ ] The button should append a grid with 9 tiles to the DOM with the Human located in the center
- [ ] The Human tile should display the name of the person and an image, the dino tiles should contain the species, an image and a fact, the bird title should contain the species, image, and "All birds are Dinosaurs."


To complete this project, your backend code must:

- [ ] Contain a class and all necessary objects
- [ ] Contain at least 3 methods for comparing dinosaurs to the human
- [ ] Get user data from the DOM
- [ ] Append tiles with object data to DOM

### Project structure
#### Prerequisites
* [Git](https://git-scm.com/downloads)
* [npm](https://www.npmjs.com/get-npm)
* [Node.js](https://nodejs.org/en/) >= 6.x
* [http-server](https://www.npmjs.com/package/http-server)

#### run the app in development mode locally
1. In Terminal, clone the git project using `$ git clone https://github.com/tomsah/dino`.
2. Navigate to the root directory for the project.
3. Run the command `npm install` to install the necessary dependencies
3. Run the command `npm run dev` to start the server. This will automatically open the website in your browser.

#### create & run a production build locally
1.  Run the command `npm install` to install the necessary dependencies   
2.   Run the command `npm run build`  
       

    the following steps are only if you are using `http-server` with its default parameter,    
    If you are using any different way to run the build, refer to the doc of you tools of choice,   

3.   Navigate to the dist folder and run `http-server`   
4.   visit `localhost:8080`   

## Folder Structure

After creation, your project should look like this:

```
dino/
  dist/
    index.html
    data/
      dino.json
    images/
    bundle.js
  src/
   data/
     dino.json
   images/
   styles/
   index.js
     README.md
  node_modules/
  package.json
  .eslintigniore
  .eslintrc
  .gitignore
  .huskyrc
  .lintstagedrc
  .prettierrc
  .travis.yml
  babel.config.js
  webpack.config.js
```

