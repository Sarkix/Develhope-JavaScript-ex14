function uncompletedNotes(notes) {
  const incompleteNotes = [];
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    for (let j = 0; j < note.todos.length; j++) {
      const todo = note.todos[j];
      if (!todo.done) {
        incompleteNotes.push(note);
        break;
      }
    }
  }
  return incompleteNotes;
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

const incompleteNotes = uncompletedNotes(notes);
console.log(incompleteNotes);
