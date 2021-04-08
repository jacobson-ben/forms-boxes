import { useState } from "react"


function NewBoxForm({addBox}) {
  const initialState = { height: "", width: "", backgroundColor: "" }
  const [formData, setFormData] = useState(initialState)

  function handleChange(evt) {
    const { name, value } = evt.target
    setFormData(fData => ({
      ...fData, [name]: value
    }))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  // Render form:

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input 
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}/>
      <label htmlFor="width">Width</label>
      <input 
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}/>
      <label htmlFor="backgroundColor">Background Color</label>
      <input 
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}/>
      <button>Add a new Box</button>
    </form>
  )
}

export default NewBoxForm;
