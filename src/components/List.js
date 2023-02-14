import Observer from "../lib/Observer";

class List extends Observer {
  createMarkup(state) {
    return `<ul>
    ${state.users.map(user => `<li>${user.name}</li>`).join("\n")}
    </ul>`;
  }

  render(state, selector = "app") {
    const markup = this.createMarkup(state);
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }

  // This method will be called by the Subject(state) whenever it updates.
  // Notice how it prompts a re-render.
  update(state) {
    this.render(state, "user-list-container");
  }
}

export default List;
