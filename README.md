# p5

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## About

Contains all the projects/demos/examples made using [p5js](https://p5js.org/)

## DEMOS

* [Painter](https://karthikJagadeesh.github.io/p5/painter)
* [Particle System](https://karthikJagadeesh.github.io/p5/particle-system)
* [Sine Dance](https://karthikJagadeesh.github.io/p5/sine-dance)

## Getting Started

- **Git clone** : [https://github.com/karthikJagadeesh/p5.git](https://github.com/karthikJagadeesh/p5.git)

    Make sure git is installed in your local machine , and run the below command 

     `git clone https://github.com/karthikJagadeesh/p5.git`

- **Navigate to any of the examples folder** 
  
        - Run the index.html file in any browser
               ---------- OR -----------   
        - Run the project example via a live server
          

- **Installing live server and running the example app via live server**
**Install** : Run the below command in command line
    
	`npm install -g live-server`

    **Starting the live server** : navigate to the example folder in command line and run the below command
	
	`live-server`

## Transpiling SASS To CSS

**NOTE : _Before you start using Sass you will need to install Ruby_**

- **Installing SASS**
[http://sass-lang.com/install](http://sass-lang.com/install)

- **Transpiling scss files to css**
  Navigate to .\painter\css in command line
  `sass index.scss index.css` 

- **Watching Sass Files as and when you change the scss file**
  Navigate to .\painter\css in command line
  `sass --watch index.scss:index.css`

Note : Writing normal css in scss file works without any problems.
