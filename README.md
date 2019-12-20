# John Trivialta 

## User stories:
* As a user, when I want to play a quiz, I need an interface that gives me a quiz
* As a user, when I want to play a particular quiz category, I should be able to choose from a list of categories
* As a user, when I want a certain level of difficulty on my quiz, I should be able to choose how difficult it is
* As a user, when I click a answer, it should tell me if I was right or wrong (via colour green for correct/red for wrong)
* As a user, so I can get the next question, I want to click a button to do this
* As a user, when I play the quiz, I should be able to track what question I am on
* As a user, when I play the quiz, I want to be able to play against a friend
* As a user, when I finish the quiz, at the end of the quiz it should tell me my score
* As a user, when if I play with a friend, at the end of the quiz it should tell me who has won the quiz
* As a user, if I want to abandon my quiz, I can redirect back to the homepage to start a new one


## Layout:
* Landing page: a page where you are able to set up your test 
* Quiz page: a page which shows the question and a set of answers (with a nice little surprise)
* Results page: A page which shows the result of quiz

## Plan of action:
[x] Understand the API and nature of the fetch response data
[x] Make empty project with working smoke test for app.js
[x] The aim is to make the quiz work for one user first:
    [x] Have an interface to set up the quiz
    [x] When the quiz parameters are chosen then the corresponding quiz should appear on screen (implement fetch and display questions & answers)
    [x] Have a button that when clicked a new question with set of answers show
    [x] If you click an answer, it changes colour corresponding to whether it is right or wrong
    [x] Track what question the user is on as they are going through the quiz
    [x] When the user gets to the end of the quiz (10 questions) then they will be met with a results page that displays their score
    [x] Have ability to return back to the landing page to set up a new quiz during/at the end of the quiz
[x] Test & snapshot test
[x] Refactor & comment
[x] Style
[ ] Implement 2nd user feature
    [ ] After a specific quiz has been set up it should show the question and a set of answers for each user side by side
    [ ] On each question it will show what question out of ten you are on 
    [ ] After 10 questions it will display a results page showing the scores of each player and who won
[x] Presentation

### SetUp component
[x] Make a SetUp component which will fetch the categories and difficulty
[x] Push the state up to App
[x] Console log the state to ensure that the information has passed through successfully

### Questions container
[x] Make a Questions class container
[x] Fetch the quiz questions from the questions API
[x] Press the button to loop through the questions
[x] Implement functionality to check if the question has been answered correctly
[x] Make a counter to track the number of correct responses
[x] Display the results

### How we would go about two players
* Everything in the set up is all the same 
* When on the quiz, it shows the set of answers twice (one on each side of the screen). Player 1 chooses an answer from the left and it will display right or wrong, same for player 2 on the right side. The skip functionality still applies so for any user that doesn't pick an answer doesn't get any score for that question. The same tracking for if one player got the right answer still applies, it is just scaled for the amount of users there are (so user1score,... in the state of questions)
* The results page will have a ternary to only display as many results as users there are


## Methodology:
* Planning
* Replanning
* Replanning out replanning
* Make hot chocolate the new meta
* Bug fixing
* Testing
* Daily standups (sometimes in a sitdown fashion if we had a hot drink)

## Technologies used:
* Javascript
* JSX
* React
* React Router DOM
* Git & Github
* Enzyme
* Jest
* CSS

## Contributors:
Aaron (AaronM97) | Lauren (Yynx) | Christopher (seekingcode18)
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
