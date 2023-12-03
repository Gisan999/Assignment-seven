# React + Vite

Project Link: https://neat-good-bye.surge.sh


QUS: Add at least 3 Project features..
- Add Course.
- A course cannot be added repeatedly.
- If the credit is more than 20, it will     show Sweet Alert



QUS: Discuss how you managed the state in your assignment project.
1. Import React and UseState: First I create import React and UseState hooks above the component file.
2. Declare State Variables: We use useState hook to declare state variables inside the functional component. The useState hook takes an initial state value as its argument and returns an array with two elements: the current state value and a function to update that state.
3. Access and update state: I can access the current state value within my component's JSX or function. To update the state, I call the stateUpdater function with the new value I want to set.
4. Handle complex state: For more complex state objects, I can use useState multiple times or use the spread operator so that I don't overwrite the entire state object.
5. Using state effectively: Ensure that I use state according to the principle of feedback. Avoid changing the state directly, and note that useState does not update the state immediately but schedules a batch update.
6. Functional updates: I can use functional updates with useState when the new state depends on the previous state. This helps prevent problems with asynchronous updates.
7. State management across components: If my assignment project involves multiple components, consider managing state across components using state management libraries.
8. Testing: I'll make sure I test the behavior of my components that use useState to verify that the state changes as expected and that my components re-render when the state is updated.
