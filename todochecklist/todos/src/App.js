import React, { Component } from "react";
import "./App.css";
import MagicTodo from "./MagicTodo";
import Liste from "./Liste";
import FooterListe from "./FooterListe";
import Recherche from "./Recherche";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.getTodos()
    };
    // bind ADD
    this.add = this.add.bind(this);
    // bind REMOVE
    this.remove = this.remove.bind(this);
    this.cocher = this.cocher.bind(this);
    this.search = this.search.bind(this);
  }

  // Methode ADD pour ajouter un Todo
  add(newTodo) {
    newTodo.id = Date.now();
    newTodo.enabled = false;
    console.log(newTodo);
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  getTodos() {
    return [
      { id: 1, title: "Mangiare", enabled: false },
      { id: 2, title: "Dormire", enabled: false },
      { id: 3, title: "Ballare", enabled: false },
      { id: 4, title: "Studiare", enabled: false },
      { id: 5, title: "Viaggiare", enabled: false },
      { id: 6, title: "Andare via", enabled: false }
    ];
  }

  remove(todo) {
    const tab = this.state.todos.filter(elt => elt.id !== todo.id);
    console.log(tab);
    this.setState({
      todos: tab
    });
    // this.setState({
    //   todos : this.state.todos.filter(elt => elt.id != todo.id)
    // })
  }
  cocher(todo, checked) {
    const index = this.state.todos.findIndex(elt => elt.id === todo.id);
    const tab = [...this.state.todos];
    tab[index].enabled = checked;

    this.setState({
      todos: tab
    });
  }
  filterCocherTodos() {
    return this.state.todos.filter(elt => elt.enabled === false).length;
  }

  search(smoothie) {
    const regex = new RegExp(smoothie, "i");

    const initial = this.getTodos();
    const newTab = this.state.todos;
    const newTodos = [...initial, ...newTab];
    const tab = newTodos.filter(elt => regex.test(elt.title));
    this.setState({
      todos: tab
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todos Checklist</h1>
        <Recherche search={this.search} />
        <MagicTodo addTodo={this.add} />
        <Liste
          cocher={this.cocher}
          todos={this.state.todos}
          remove={this.remove}
        />
        <FooterListe nb={this.filterCocherTodos()} />
      </div>
    );
  }
}

export default App;
