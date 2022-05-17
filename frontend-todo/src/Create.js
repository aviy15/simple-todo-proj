
import { useState } from "react";
import axios from "axios";

const Create = () => {
    const [task , setTask] = useState('');
    const [details , setDetails] = useState('');
    const [date , setDate] = useState(null);
    const [priority , setPriority] = useState(1);
    
    const handleClick = async (e) =>{
        console.log(task , details);
        await axios({
            method: 'post',
            url: 'http://localhost:4000/api/task/',
            data: {
              title : task,
              description : details,
              priority : priority,
              completed : false,
              date : date
            }
        }).then(() => {
            //history.push('/');
        }).catch(e => console.log(e));
    }

    return ( 
        <main>
        <div className = "create">
            <h2>Add a task to your list!</h2>
            <form onSubmit = {handleClick}>
                <label> Details about your task : </label>
                <input type = "text" placeholder="Title" required value={task} onChange = {(e) => setTask(e.target.value)} />
                <input type = "textarea" placeholder="Description" required value={details} onChange = {(e) => setDetails(e.target.value)} />
                <input type = "number" required value={priority} onChange = {(e) => setPriority(e.target.value)} />
                <input type = "date" required value = {date} onChange = {(e) => setDate(e.target.value)} />
                <button>Submit</button>
            </form>
            </div>
        </main>
     );
}
 
export default Create;