## Let's Review Everything We Learned In Week 1

1. Initialize an undeclared variable called "myVar"

2. Set that variable to a string

3. Initialize a variable called "myNum" and set it to a number

4. Set the remainder of 100 divided by 15 to a variable called "myRemainder"

5. Create an "if" statement that checks if x is greater than 3, if so, log out a statement to the console  

6. Create an array and set all the value types of Javascript inside of it

7. Create a function that takes 3 words and concatenates them together and logs the result in a statement to the console

8. In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Log the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

| Strokes     | Log    |
| :---------- | :-------------  |
| 1           | "Hole-in-one"   |
| <= par - 2  | "Eagle"         |
| par - 1     | "Birdie"        |
| par         | "Par"           |
| par + 1     | "Bogey"         |
| par + 2     | "Double Bogey"  |
| >= par + 3  | "Go Home!"      |

---
```
function golfScore(par, strokes) {
}

// Change these values to test
golfScore(5, 4);
```
