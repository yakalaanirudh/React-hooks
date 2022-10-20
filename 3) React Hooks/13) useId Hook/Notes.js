/*
Initially there will be an email label on top
Text in middle and
Another email label at the bottom

In our code since we used

<label htmlFor="email">Email</label>
<input id="email" type="email" />

both email labels have same id and this results in a bug
If we click on the bottom email label the upper email label input box is highlighted

To fix this bug we use useId Hook

The ids generated by useId look like ":r1:" ":r2:"

since ids start with :
we cant select them by
document.getElementbyId(":r1:")     it throws an error
We have to select these ids by useref hook

*/
