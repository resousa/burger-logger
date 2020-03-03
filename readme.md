# burger-logger
[check it out!](https://burger-logger-pro.herokuapp.com/)

## Table of contents
- [General info](#Info)
- [Technologies](#Technologies)
- [Summary](#Summary)
- [Authors](#Authors)
- [License](#License)

### Info
This application was created using MySQL and Handlebars, and is deployed using Heroku. This burger logger gives the user the ability to keep track of all the burgers they could ever want. The user has the ability to add new burgers to their chioce of 2 lists. The first list is for burgers the user has not ate yet and the second list is for burgers the user has already ate. Below is a screenshot of the app. 
![screencap](https://github.com/resousa/burger-logger/blob/master/public/assets/images/screencap.PNG?raw=true)

### Technologies
Project created with :
- [Heroku](https://heroku.com)
- [MySQL](https://www.mysql.com/)
- [node.js](https://nodejs.org/en/)

#### npm packages
- [mysql](https://www.npmjs.com/package/mysql)
- [express](https://www.npmjs.com/package/express)
- [handlebars](https://www.npmjs.com/package/handlebars)


### Summary

The burger logger has a datatbase created with MySQL. The database has 1 table that has been connected to Heroku. The database has the ability to take in a name of a burger for input. It then takes the input value if the user has eaten the burger before or not. Once the user has entered in the new burger information it then gets placed in one of the 2 tables on the website. This is done with the handlebars npm package. The burger logger also has the ability to take a burger from the not eaten table to the eaten table. The final feature is the ability to delete any burgers the user would like.

### Authors

- Ryan Sousa

### License

- MIT License Copyright (c) 2020 Ryan Sousa