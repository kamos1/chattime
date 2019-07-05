# Chat Time

This is a real-time messaging app, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started follow these steps:

1. Clone this repo
2. [Clone this server repo](https://github.com/kamos1/chattime-server). The server is needed to get the app fully up and running
3. Once cloned, npm install or yarn add
4. yarn start or npm start to fire up the app

## The Basics

For the frontend I went with React. There are 5 components including the app that make up Chat Time.

- Display.js: This is a stateless component that acts as a holding place for displaying all of the messages. It's responsibility is to take the messages passed down as a prop called messagess and render a message component for each message in the messages array.
- Message.js: This is a stateless component that takes in two props, name and message and returns a message component. It is used in Display.js.
- MessageInput.js: This is a stateful component that handles the user's name and message. There are three input elements that make up this component.
- TypingNotification.js: This is stateless component that accepts one prop, `isTyping` and based on this prop a div will display notifiying the users that someone is typing.
- App.js: This is a stateful component that is responsible for maintaing all of the messages and knowing when someone is typing. App has a function called `whatToDisplay`. It helps with properly displaying the TypingNofitication component.

I chose to make each of these components in an attempt to one, make sure nothing was doing anything more than it needed to and two, to keep the JSX fairly readable.

## Fun Stuff

Messaging apps are supposed to be quick so I decided to implement websockets, with `socket.io-client`. There are several events that are triggered from the frontend and several events being listened for on the frontend.

- MessageInput.js: There are three events that are triggered
  - `submitMessage` is emitted to the server when the submit button is clicked with a payload that contains the name of the sender and the text of that message.
  - `typing` is emitted when a user begins typing in the input for the message and has a payload that contains the name of the user typing.
  - `noTyping` is emitted when a user stops typing in the input for the message and contains no payload.
- App.js: There are three events that are being listened for in App.js
  - `receiveMessage` lets app know that a user has submitted a message and we need to add it to the messages array.
  - `typing` and `noTyping` lets app know that someone is and isn't typing. Based on which event app hears `isTyping` to true or false. `isTyping` is then passed down to the TypingNotification component as a prop and depending on is value you'll see the TypingNotification display or not.

## Testing

For testing I went with react-test-render. Each component has a test to make sure it is rendering the correct information.

## Wishlist

- Fix the wonkiness with the TypingNotification because it appears and disappears too quickly.
- Saving the messages to localStorage so they persist through a refresh of the page.
- Add react-router so there can be a sort of create username component that displays the first time you load the application. This would remove the name input from the MessageInput component. Now you can freely change your name mid conversation.
- Add a component to display who is in the chat room
- Add some mocking for the websocket events
- Add some much needed styling
