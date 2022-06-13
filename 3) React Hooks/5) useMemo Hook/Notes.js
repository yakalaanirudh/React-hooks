/*
When we enter a number it takes about half a second for react to give us the result
But when we click the change theme button it takes about half a second to change the theme too because
When we update state in react it is going to re render the entire component so
The doublenumber slowFunction is called everytime we change theme too making the process slow.
So what happens is that slowFunction gets called everytime we change number, change theme or some component updates this component
To prevent this we use useMemo Hook i.e to circumvent calling the slowfunction even when we change theme too
Memo stands for memorization
When we change theme but the same number is in input we get the same output but 
since we are changing state we are calling slowFunction again.
To prevent this using useMemo we store the initial input value and the result of the slow function in cache
We dont add many dependancies into [] beacuse it has to call useMemo everytime and 
it is saving the data in cache which will lead to performance issues

WE USE USE MEMO WHEN THERE IS SLOW FUNCTION IN THE PROCESS AND THE OTHER CASE IS REFERENTIAL EQUALITY

REFERNTIAL EQUALITY NOTES
When we compare two objects or arrays in JS it compares their references
It is used in this case to make sure the reference of the object is same from the previous time the state has been updated.
*/