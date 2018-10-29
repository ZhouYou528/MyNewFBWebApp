# Gatorbook

Demo: [here](https://gatorbook.herokuapp.com/)
[![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/linnovate/mean?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Coverage Status](https://coveralls.io/repos/github/jsdoc2md/jsdoc-to-markdown/badge.svg?branch=master)](https://coveralls.io/github/jsdoc2md/jsdoc-to-markdown?branch=master)
[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)

Gatorbook is a Facebook-like social network web application built using MEAN stack (MongoDB, Express, Angular 4, Node.js), with nearly ALL features you have on a facebook!

- For users, user guide can be found [here](https://github.com/yummycoding/weLoveFaceBook/wiki/Front-End-Documentation) (You can see what our interface looks like there :) )

- For developers, RESTful API can be found [here](https://github.com/yummycoding/weLoveFaceBook/wiki/REST-API-Documentation)

- To get started and mount Gatorbook on your own computer, please read the following

<img src="https://github.com/yummycoding/weLoveFaceBook/blob/newb/frontend/src/assets/images-home/gator.png" width="300">

**Table of Contents**

- [MEAN Stack Introduction](#about-mean-stack)
- [Setup Environment and Install Our Code](#setup-and-install)
  - [Node v6.11.2](#node-v6.11.2)
  - [NPM global dependencies](#npm-global-dependencies)
  - [MongoDB v3.4.9](#mongodb-v3.4.9)
  - [Source code](#source-code)
- [Mount Program](#mount-program)
- [Testing](#testing)
- [Feedback your suggestions](#feedback)
- [License and authors](#license-and-authors)



## About MEAN Stack

- [MongoDB](https://www.mongodb.org/) - MongoDB is the leading NoSQL database, empowering businesses to be more agile and scalable
- [Express](http://expressjs.com/) - Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications
- [Angular 4](https://angular.io/) - based framework. -Angular lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop
- [Node.js](http://www.nodejs.org/) - Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications

## Setup and Install

The following instructions are the most common ways to get the development environment up and running, if you run into issues, check out the [feedback](#Feedback) section and let us know what issues you met.

#### Node v6.11.2
You need Node 6.11.2 in your system. Verify if you already have it with `node -v`. If not or different version, you can use Node Version Manager (nvm) to install it.
```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.1/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 0.12
nvm use 0.12
```

#### NPM global dependencies
```bash
# Nodemon
npm install -g nodemon

# Express
npm install -g express

# Mocha
npm install -g mocha

# Mongoose
npm install -g mongoose

# Supertest
npm install -g supertest

# Cors
npm install -g cors

# jwt
npm install -g jwt

# bcrypt-nodejs
npm install -g bcrypt-nodejs
```

#### MongoDB v3.4.9

- Mac: `brew install mongodb 3.4.9`
- Ubuntu: `sudo apt-get -y install mongodb=3.4.9`

#### Source code
To install our source code
```bash
git clone https://github.com/yummycoding/weLoveFaceBook
cd weLoveFaceBook
npm install
```

## Mount Program
After setting up the environment needed and installing our source code, now you can mount Gatorbook server and use the app on your own end!

To mount Gatorbook server:

- In your terminal, key in `mongod`. This will open your database.

- Then open a new terminal and change your working directory to folder "frontend", and key in `ng build -w`. This will build dist for your front end. 

- At last open another terminal and change your working directory to folder "backend", key in `nodemon server.js`, which use the dist built in step 2, and mount the server on https://localhost:3000.

Enjoy using Gatorbook:

- In your browser, view https://localhost:3000 and you are now able to use our application on your own computer!

## Testing
For testing, we did unit testing for both front and back end when developing, also e2e testing were done to make sure project works as a whole.
- [Instructions on front end unit testing](https://github.com/yummycoding/weLoveFaceBook/wiki/Making-Client-side-Tests)
- [Instructions on back end unit testing](https://github.com/yummycoding/weLoveFaceBook/wiki/Making-Server-side-Tests)
- [Instructions on e2e testing](https://github.com/yummycoding/weLoveFaceBook/wiki/Making-End-to-End-Tests)
 
## Feedback
If you have any doubts, questions or ideas for improvement, feel free to give us your feedback [here](https://github.com/yummycoding/weLoveFaceBook/issues/new) !


## License and Authors

#### License


#### Authors
| Name | GitHub ID | Contact Information |
|------|-----------|---------------------|
|You Zhou|ZhouYou528| |
|Junhao Zhang|zjunhao| |
|Zhuoru Li|wobusimanong| |
|Zhenqian Guo|GrandStar & smallGrandstar| |
