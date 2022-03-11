# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to `http://localhost:3000`
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following questions:

1. What is the DOM?
  The Document Object Model is the browser's conceptualization of the integration of HTML, CSS, and JS. These three components are parsed with the injection of data to produce a "live" creature capable of visual representation and interaction with both the user and external data sources (servers, etc.).   
2. What is an event?
  The DOM can implement Event Listeners which "listen" (what else?) for any number of "events" and then assign an Event Handler function to respond with a specified reaction. The list of available possible events to listen for is extensive, but varies depending on the element the listener is being set on. A common example of such is a "click" event, where the user clicks on a particular part of the page. As elements in the DOM are are typically nested, this can create some confusion as to which element is actually being "clicked", as there are likely multiple layers of elements beneath the cursor at the time of the click. The DOM resolves this confusion using the Event Flow, which is a three-phase, two-process sequence:

    CAPTURING: of all the elements which exist in the DOM-space where the even occurred (in the case of the "click" event, this would be everything below the cursor at the time of the click, including the body, document, and window elements), the event capturing process starts at the outermost (the one in which all other events are nested). That element is checked for an appropriate eventListener and, if it finds one, checks if its third parameter (useCapture) is set to TRUE. If it is, it calls the specified Event Handler to process the event. The capture process subsequently moves inward, one element at a time, and checks for any additional Listeners which are set to trigger their Handler during the capture process. Eventually, the capture process lands on the innermost element that triggered the event.-- this is the event target, and is where Event Capturing ends.

    TARGET:   the Event Target is the innermost element which triggered the event. For the end user, this is usually the element which would be described as "what I was trying to click on," or something to that effect. When the Event Object is passed to the Event Handler, this is what is is bound to the event.target property. The target is not itself a separate process so much as it is the end-point of the capturing process and the start-point of the bubbling process.
        NOTE - though an event may ripple inwards or outwards through capturing or bubbling, the element referenced by event.Target remains the same. The other elements are each accessible through their respective binding to the 'this' keyword. 

    BUBBLING: similar to capturing, Event Bubbling travels the nested levels of elements. In contrast with capturing, however, bubbling starts at the event target and travels outward, seeking elements with an appropriate listener set, triggering the associated handlers in the process.

    NOTES:  * The current event phase is accessible through the event object's eventPhase property.
            * There is a fourth phase (the "None" phase) which is the no-event-is-happening-phase.
            * Both bubbling and capturing events can be told to travel no further up/down the nested-event-hierarchy (the process is called "Event Propagation") using the Event Object's stopPropagation() method.
            * React handles event handlers slightly differently: it doesn't attach them to nodes, but rather to the document root, and then calls the Target element first when the event is triggered. The event is then allowed to bubble outward. This allows for cross-browser-compatibility (issues with which are the very reason we now have both a Capture and Bubble phase).
            * Bubbling is the default (and most commonly used) method of even propagation.
            * Most events propagate by default, with some significant exceptions (such as the "focus" event).

3. What is an event listener?
The EventTarget object dispatches an event. An EventListener object listens for and processes that event when it is received from the EventTarget. A listener can be added to an element using the addEventListener() method. This method accepts three parameters:
    1) The specific event type that is to be listened for
    2) A callback function which becomes the EventHandler and is triggered when the listener detects the triggering event.
        a) The callback function receives a single parameter, a variable declaration which binds to the Event Object (which is automatically passed to the function)
    3) A boolean which defaults to false and specifies whether Event Capturing will assign the EventHandler upon event detection (the default of false means that no, Event Capturing will not assign the handler; instead, Event Bubbling will assign it)

4. Why would we convert a NodeList into an Array?
Because we're prejudiced. Haha?
The short answer is, for added functionality. Here's the novel:

There is a difference in functionality between arrays and 'array-like objects,' defined as objects with a length property and indexed elements. There are further differences in functionality between the varieties of these array-knockoffs. Here are some examples:

HTMLCollection: the document.links attribute (or a getElementsByTagName method) returns an array-like-object called an HTMLCollection (which is an anachronistic term: today, and HTMLCollection can contain elements other than HTML elements). While a for/in loop will effectively iterate through all elements of an array, using it to iterate through all elements of an HTMLCollection will return all iterable properties: this includes not only the values, but also "length" (et al), thereby potentially producing unwanted results. Methods particular to arrays (such as forEach, map, filter, and reduce) are completely unavailable in an HTMLCollection. Furthermore, an HTMLCollection is a "live" collection -- any changes in the dom will be reflected as changes in the collection.

NodeList: in contrast, a NodeList can be either live (accessible via the Node.nodelist property) or static (returned from a document.querySelectorAll). Otherwise, a NodeList functions much like an HTMLCollection, with the notable exception that it possesses a forEach method.

Oftentimes, we require the use of some more advanced and targeted methods to process the data in an array-like object. In this case, the Array.from array method will convert an HTMLCollection or NodeList into a proper array, thereby providing access to a broader range of iteration methods (map, filter, reduce, etc).
NOTE - the Array.from() method accepts a second parameter: a callback function that acts like Array.map and transforms each element before it is passed to the new array, without ever creating the intermediate array. (Array.from will also accept a "this" binding for its third parameter). 

5. What is a component?
A reusable piece of code. A function whose innerworkings do not require explication to make use of it because it performs a prescribed function. It may produce a block of HTML that functions as a unit, or maintain a database, or manage communication with a server -- but it does a something that can be used in larger programs. It becomes a COMPONENT of a larger network of functionality.