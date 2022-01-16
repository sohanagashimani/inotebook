import React, { useContext,useState } from 'react'
import NoteContext from '../Context/Notes/NoteContext';

function AddNote() {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setnote] = useState({title: "", description:"", tag:""})
    const handleClick = (e)=> {
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setnote({title:"",description:"",tag:""})
    }
    const onChange =(e)=>{
        setnote({...note,[e.target.name]: e.target.value});
    }
    return (
        <div>
            <div className="container my-3">
      <h2>Add a Note</h2>
                <form>
            <div className="mb-3">
                <label htmlfor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" value = {note.title}onChange = {onChange} minLength={5} required/>

            </div>
            <div className="mb-3">
                <label htmlfor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name = "description" value = {note.description} onChange = {onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlfor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name = "tag" value = {note.tag} onChange = {onChange} minLength={5} required/>
            </div>
  
            <button disabled = {note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick = {handleClick}>Add Note</button>
            </form> 
            </div>
        </div>
    )
}

export default AddNote
