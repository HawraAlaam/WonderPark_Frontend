import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GameForm = ({ games, setGames }) => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    img: "",
    description: "",
    category: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/games", formState);
      setGames([...games, response.data]);
      setFormState(initialState);
      navigate("/");
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <div>
      <h1>Add A New Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formState.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          value={formState.img}
          onChange={handleChange}
          name="img"
          placeholder="Image URL"
        />
        <textarea
          value={formState.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
        />
        <select
          name="category"
          value={formState.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Sports">Sports</option>
          <option value="Simulation">Simulation</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GameForm;
