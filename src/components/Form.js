class Form {
  // Passing in our state object and setting it as a class property.
  constructor(state = {}) {
    this.appState = state;
  }

  createMarkup(state) {
    return `<div>
      <form id="add-user">
        <label for="username">Add a User</label>
        <input id="username" type="text" name="name">
        <button type="submit">Add</button>
      </form>
    </div>`;
  }

  render(selector = "app") {
    const markup = this.createMarkup(this.state);
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;

    this.bindEvents();
  }

  // Bind an event on submit for the add user form.
  bindEvents() {
    const form = document.getElementById("add-user");
    form.addEventListener("submit", e => {
      e.preventDefault();

      const el = e.target;
      const { value: name } = el.name;

      if (!name) {
        return;
      }

      // Getting the current state.
      const state = this.appState.get();

      const users = [...state.users, { id: state.users.length++, name }];

      el.name.value = "";

      // Updating state will prompt a re-render via the notify method being called.
      this.appState.update({
        ...state,
        users
      });
    });
  }
}

export default Form;
