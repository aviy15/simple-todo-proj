import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
  const id = useParams();
  console.log(id);
  const {data , loading , error} = useFetch('http://localhost:4000/api/task/' + id.taskid);
  let history = useHistory();
  console.log(data);
  const handleClick = () =>{
    axios({
        method: 'delete',
        url: 'http://localhost:4000/api/task/' + id.taskid,
    }).then(() => {
        history.push('/');
    });
  }
  const handleClickCompleted = () =>{
    axios({
        method: 'put',
        url: 'http://localhost:4000/api/task/' + id.taskid,
    }).then(() => {
        history.push('/');
    });
  }
  const getDate = (dt) => {
    const ret = new Date(dt);
    //console.log(ret.toDateString())
    return ret.toDateString();
  }
  return (
    <div className="details">
        {error && <div>{error}</div>}
        {(!error) && loading && <div>Loading....</div> }
        {data && (<article>
            <h2>Task : {data.title}</h2>
            <h4>Priority : {data.priority}</h4>
            <div>{data.description}</div>
            <h4>This task is due on : {getDate(data.date)}</h4>
        </article>) }
        {data && (!data.completed) && <button onClick = {handleClickCompleted} className = "blue-button">Mark as completed</button>}
        <div><button onClick = {handleClick} className = "red-button">Delete from to-do list</button></div>
        
    </div>
  );
}
 
export default Details;