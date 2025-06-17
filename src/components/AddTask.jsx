import { useState } from "react";
import Input from "./Input";
function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input 
        type="text" placeholder="To do title"  
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      >
      </Input>
      <Input 
        type="text" placeholder="To do description"  
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        >
        </Input>
      <button 
        onClick={() => {
          //verify if title and description are filled 
          if (!title.trim() || !description.trim()) {
            return alert("Fill the blanks")
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }} 
        className="bg-slate-800 text-white px-4 py-2 rounded-md font-medium"
        > Add</button>
    </div>
  );
}
export default AddTask;