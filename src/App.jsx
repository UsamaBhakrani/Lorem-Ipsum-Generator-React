import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          value={count}
          type="number"
          id="amount"
          name="amount"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          delectus debitis soluta illo asperiores facilis tempora iusto
          quibusdam magni voluptas?
        </p>
      </article>
    </section>
  );
};

export default App;
