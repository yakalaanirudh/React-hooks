/*

1)We can only use hooks inside of function components we cannot use them in class components

example:-
class App extends React.component{
    We cannot use hooks in this
}

2)Everytime our function runs our hooks must execute in the exact same order
example:-
useState()
useState()
useState()
useState()


These 4 usestate hooks must execute in the same order

example:-
if(this===something){
    useState()              This hook may or may not run, hooks cant be used like this
}
useState()
useState()
useState()
*/
