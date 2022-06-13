/*
USETRANSITION()

useTransition() can be used to tell React that certain state updates have a lower priority 
(i.e., all other state updates or UI rendering triggers have a higher priority).

When calling useTransition(), you get back an array with exactly two elements:
An isPending boolean value, telling you whether the low-priority state update is still pending,
and a startTransition() function that can be wrapped around a state update to tell React,
that it is a low-priority update.
*/

/*
USEDEFERREDVALUE()
useTransition() gives you full control since you decide which code should be wrapped and treated as "low priority".
Sometimes though, you might not have access to the actual state updating code
(e.g., because it's performed by some third-party library). Or, for some reason, you can't use useTransition().

In such cases, you could use useDeferredValue() instead.

With useDeferredValue(), you don't wrap the state updating code 
but instead the value that's in the end generated or changed because of the state update
(either the state value itself or some value that's computed based on the state value, as in the demo app shown in the video).
*/