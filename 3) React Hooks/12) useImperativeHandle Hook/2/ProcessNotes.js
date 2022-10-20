/*
Now in this example I sensually have an open button that's going to open a modal 
then I have three buttons for focusing different things inside that modal. 

When I click open you can see it open our modal down here which has a yes button which is our confirm 
and deny it but which has no then we have a close button which is this acts up here.

When I click on these buttons focus close focus confirm and focus deny 
I wanna focus each individual element inside of our modal that may sound really easy 
to do but it's difficult to do because these focus buttons are in my app component 
while all of the buttons I wanna focus our inside my confirmation modal component.

so they're kind of get disconnected from one another and accessing them is very difficult 
to do you may think OK lets gonna do this with props we're gonna pass like a focus close prop 
will have like a focus you know confirm prop or whatever or deny and you can pass all those in 
but doing that doesn't really make sense because then you need to handle all the focus state 
inside react which is kind of a pain to do since the browser does it all for you automatically.

This is just not a good solution instead what you wanna do is you wanna expose a new ref 
this new ref is going to have a function for focusing these three different buttons and that's all it's going to do.

So now you're gonna have one ref which references all three of the buttons you care about this is 
probably one of the more common use cases you're going to have for when you need to do a custom ref with use imperative handle 

you need to access multiple elements inside of a custom component outside of that component more props just don't make sense 

so already so far I'm passing down our ref which is called modal ref and in here 
I'm already doing all of the react forward ref stuff that we need to do and 
all we're gonna do is handle what would happen with the use imperative handle

I'm gonna come in here with our use imperative handle hook we're gonna say use imperative handle 
make sure it's imported up here and we're also gonna need useRef cause  we need to 
create references to these different buttons that we want to focus 

so we're gonna have a ref here which is our close ref we're gonna do the same thing down here 
for our confirm and our deny so we're gonna say confirm and then here we're gonna say deny and

I'm gonna create those refs up here so I have access to all three refs from buttons inside 
these refs and in our use imperative handle I can pass the ref for my custom component disconfirmation modal 
here I can pass it our function which is going to return to us an object that has three functions on it 
we're gonna have a focus close button and then we're gonna have the exact same function essentially for confirm and then deny button

created a new reference and this new reference only has three functions 
we have a focus for closed deny and confirm now I can use those three functions outside of this confirmation modal 
so if I save this nothings changed which is good and if I go to app here on focus close 
I can just say onclick I wanna do is I wanna take my modal ref I'm gonna get the current value 
I wanna hold that focus close button function I'll call it and we're gonna see if this works
 we just do just like that so now if I click focus close you can see it focused that close button on our screen 
 just do the same thing with our other buttons as well we're gonna come in here we're gonna have our denied 
 and this is gonna be for confirmed and now when I click focus confirm you can see it highlighted that 
 yes button same thing with deny and same thing with close so by doing this I can essentially change 
 how my refworks I'm saying you know what these are the things that I want the ref to do the ref has functions 
 for doing these three separate things 'cause that's all I care about they don't make sense to do with props 
 instead I'm going to be using this use imperative handle ref combination should handle this and then all I did is 
 just put references for those different elements inside my HTML and I could use those up in this year's 
 imperative handle also what I could do inside here is put the empty brackets in because again this doesn't depend on values 
 changing is still going to work just fine now one important thing to take away from this video 
 is that using perative handle is something you should not it was very often at all they're only very specific use cases 
 where you should use it

















*/