// make a form which contain the following information
// which is your favourite food? (textbox)
// mention any hobbies (textbox)
// when will you feel happy (textbox)
// when will you get wild (textbox)
// any one movie you liked the most (textbox) 
// help me to provide a best place to visit near by (textbox) 
// who is your favourite cricket player (textbox)
// which is your favourite subject (textbox)
// who is your guide (textbox)


import React, { useState } from "react";

function KnowYourself() {
  const [formData, setFormData] = useState({
    favouriteFood: "",
    hobbies: "",
    happiness: "",
    wild: "",
    favouriteMovie: "",
    bestPlace: "",
    favouritePlayer: "",
    favouriteSubject: "",
    guide: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
    alert("Thank you for submitting the form!");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Share Your Thoughts</h2>

        <label style={styles.label}>Which is your favourite food?</label>
        <input
          type="text"
          name="favouriteFood"
          value={formData.favouriteFood}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Mention any hobbies</label>
        <input
          type="text"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>When will you feel happy?</label>
        <input
          type="text"
          name="happiness"
          value={formData.happiness}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>When will you get wild?</label>
        <input
          type="text"
          name="wild"
          value={formData.wild}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Any one movie you liked the most</label>
        <input
          type="text"
          name="favouriteMovie"
          value={formData.favouriteMovie}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>
          Help me to provide a best place to visit nearby
        </label>
        <input
          type="text"
          name="bestPlace"
          value={formData.bestPlace}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Who is your favourite cricket player?</label>
        <input
          type="text"
          name="favouritePlayer"
          value={formData.favouritePlayer}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Which is your favourite subject?</label>
        <input
          type="text"
          name="favouriteSubject"
          value={formData.favouriteSubject}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Who is your guide?</label>
        <input
          type="text"
          name="guide"
          value={formData.guide}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

// Basic styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  label: {
    display: "block",
    marginTop: "10px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "5px 0 15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default KnowYourself;