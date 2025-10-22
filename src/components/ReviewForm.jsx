import { useState } from "react"
import axios from "axios"

const ReviewForm = ({ reviews, setReviews, gameId }) => {
  const initialState = {
    rating: "",
    comment: "",
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post("http://localhost:3000/ratings", {
      ...formState,
      game: gameId,
    })
    let reviewList = [...reviews]
    reviewList.push(response.data)
    setReviews([...reviews, response.data])
    setFormState(initialState)

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating:</label>
      <select name="rating" onChange={handleChange} value={formState.rating}>
        <option value="" disabled defaultValue>
          Select Rating
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <label htmlFor="comment">Comment:</label>
      <textarea
        name="comment"
        onChange={handleChange}
        value={formState.comment}
        placeholder="Write your comment here.."
      ></textarea>

      <button type="submit">Submit Review</button>
    </form>
  )
}

export default ReviewForm
