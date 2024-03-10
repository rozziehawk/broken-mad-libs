import React, { useState } from "react";

const MadLibForm = () => {

    const initialState = {
        noun1: "",
        noun2: "",
        adjective1: "",
        color1: ""
      }
    const [formData, setFormData] = useState(initialState);

   
    const handleChange = e => {
      const { name, value } = e.target;
    
      setFormData(data => ({
        ...data,
        [name]: value
      }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { noun1, noun2, adjective1, color1 } = formData;
        //alert(`Created user, ${username} w/ email ${email} & password ${password}`)
        setFormData(initialState)
      }
    
    
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="noun1">Noun</label>
          <input
            id="noun1"
            type="text"
            name="noun1"
            placeholder="noun"
            value={formData.noun1}
            onChange={handleChange}
          />
    
          <label htmlFor="noun2">Email</label>
          <input
            type="text"
            placeholder="noun"
            name="noun2"
            id="noun2"
            value={formData.noun2}
            onChange={handleChange}
          />
    
          <label htmlFor="adjective1">Adjective</label>
          <input
            type="text"
            placeholder="adjective"
            name="adjective1"
            id="adjective1"
            value={formData.adjective1}
            onChange={handleChange}
          />

          <label htmlFor="color1">Color</label>
          <input
            type="text"
            placeholder="color"
            name="color1"
            id="color1"
            value={formData.color1}
            onChange={handleChange}
          />
    
          <button>Show Story</button>
        </form>
    )
        
}

export default MadLibForm;