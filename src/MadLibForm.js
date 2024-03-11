import "./MadLibForm.css"
import React, { useState } from "react";

const MadLibForm = () => {

    const initialState = {
        isSubmitted: false,
        noun1: "",
        noun2: "",
        adjective1: "",
        color1: ""
    }
    //let strStory = useState("");
    //const storyText1 = "There was a ";
    //const storyText2 = "who loved a ";
    
    const [story, setStory] = useState( {
        isSubmitted: false,
        text1: "There was a ",
        color1: " ",
        noun1: " ",
        text2: "who loved a ",
        adjective1: " ",
        noun2: " "
    })
    
    const [formData, setFormData] = useState(initialState);

    const parseStory = (story) => {
        const storyText1 = "There was a ";
        const storyText2 = "who loved a ";
        const  sStory = 
           storyText1.concat(story.color1).concat(" ").concat(story.noun1).concat(" ").concat(storyText2).concat(story.adjective1).concat(" ").concat(story.noun2);
        //sStory += story.text1 + story.color1 + story.noun1 + story.text2 + story.adjective1 + story.noun2;
        console.log(sStory);
        return sStory;
    }

   
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
        story.noun1 = noun1;
        story.noun2 = noun2;
        story.adjective1 = adjective1;
        story.color1 = color1;
        
        setFormData(initialState);
        story.isSubmitted = true;
        //strStory = parseStory(story);
        return;
    }
    
    let strFoo = "";
    if (story.isSubmitted)
    {
        strFoo = parseStory(story);
    }
    return (
        <form onSubmit={handleSubmit} className="MadLibForm">
          <label htmlFor="noun1">Noun:</label>
          <input
            id="noun1"
            type="text"
            name="noun1"
            placeholder="noun"
            value={formData.noun1}
            onChange={handleChange}
          /><br/>
    
          <label htmlFor="noun2">Noun:</label>
          <input
            type="text"
            placeholder="noun"
            name="noun2"
            id="noun2"
            value={formData.noun2}
            onChange={handleChange}
          /><br/>
    
          <label htmlFor="adjective1">Adjective:</label>
          <input
            type="text"
            placeholder="adjective"
            name="adjective1"
            id="adjective1"
            value={formData.adjective1}
            onChange={handleChange}
          /><br/>

          <label htmlFor="color1">Color:</label>
          <input
            type="text"
            placeholder="color"
            name="color1"
            id="color1"
            value={formData.color1}
            onChange={handleChange}
          /><br/>
    
          <button>Show Story</button>
          <br/>

        {strFoo}
        
        
        </form>
    )
        
}

export default MadLibForm;