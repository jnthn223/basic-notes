import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-8 bg-gray-950">
  <header>
    <h1 className="text-4xl font-bold">Basic Notes</h1>
  </header>

  <main>

    {/* Add Note Form */}
    <section aria-labelledby="add-note-form" className="bg-gray-800">
      <form id="note-form">
        <div>
          <label htmlFor="note-title">Title</label>
          <input type="text" id="note-title" name="title" required />
        </div>

        <div>
          <label htmlFor="note-content">Note</label>
          <textarea id="note-content" name="content" rows={4} required></textarea>
        </div>

        <button type="submit">Add</button>
      </form>
    </section>

    {/* Notes List */}
    <section aria-labelledby="notes-list-title">
      <h2 id="notes-list-title">Notes</h2>

      <ul>

        <li>
          <article>
            <header>
              <h3>First Note</h3>
            </header>
            <p>This is my first note.</p>
            <footer>
              <button>Edit</button>
              <button>Delete</button>
            </footer>
          </article>
        </li>

        <li>
          <article>
            <header>
              <h3>Shopping List</h3>
            </header>
            <p>Milk, Bread, Cheese</p>
            <footer>
              <button>Edit</button>
              <button>Delete</button>
            </footer>
          </article>
        </li>

        <li>
          <article>
            <header>
              <h3>Todo</h3>
            </header>
            <p>Finish the project</p>
            <footer>
              <button>Edit</button>
              <button>Delete</button>
            </footer>
          </article>
        </li>

      </ul>
    </section>

  </main>
</div>
  );
}
