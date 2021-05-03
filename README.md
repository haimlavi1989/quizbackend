## Description
```
The application will shows 10 questions taken from NestJs API in a carousel layout.

The application is written in latest Angular version and latest NestJS version. (03/05/2021)
The Api is using NestJs to get all questions using <NestExpressApplication>
  *NestJs will serve angular application using Ejs.
Fetching the questions using this query:
https://opentdb.com/api.php?amount=10&type=multiple
Display 10 Questions on carousel view (use PrimeNG Library)
  Answering Rules: 
• Each question should not be shown more than once.
• The user should have 3 strikes to get the answer wrong.
• For each wrong answer the user should see shake animation.
• The user wont be able to answer on same question more then once.
• The user should be able to re generate all questions and restart.
• The user should see final results when done ( answered correctly 7 out of 10 )
```
<p align="center">
<img src="https://drive.google.com/uc?export=view&id=1J4kydGeXyDObgjlX0iF77Bq2ybbUgEpt">
</p>  

## Demo application
The application is served **<a href="https://quizappnesjs.herokuapp.com/">here</a>**


## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# development
$ npm run dev

```



