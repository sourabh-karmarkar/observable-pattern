import "./styles.css";
import users from "./utils/users";
import State from "./lib/State";
import List from "./components/List";
import Form from "./components/Form";
import Count from "./components/Count";

// Instantiate classes.
const AppState = new State(); // application state
const namesList = new List(); // Create a new user list.
const userForm = new Form(AppState); // Create a new user form.
const userCount = new Count(); // Create a new Count class.

// Hydrate state with initial users.
AppState.update({ users });

// Add the observers. These objects will re-render when state changes.
AppState.addObserver(namesList);
AppState.addObserver(userCount);

// On load, perform initial render..
namesList.render(AppState.get(), "user-list-container");
userForm.render("add-user-container");
userCount.render(AppState.get(), "user-count-container");
