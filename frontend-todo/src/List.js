import { Link, useHistory } from "react-router-dom";

const List = ({data}) => {
    const history = useHistory();
    const checkDiff = (dt) => {
        const cdate = new Date() , tdate = new Date(dt);
        const diffTime = -(cdate - tdate);
        if(cdate >= tdate){
            return -1;
        }
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        //console.log(diffDays);
        return diffDays; 
    }
    return ( 
        <div className = "list">{data.map(task => (
            <div className="preview" key={task._id || task.mal_id}>
                <Link to={(`/task/${task._id}`) }>
                    <h2 style={{
                                textDecoration: task.completed ? 'line-through' : 'none'
                            }}>{ task.title }</h2>
                    <p>{ task.synopsis }</p>
                </Link>
                {task.completed && <div>You have completed this task!</div>}
                {checkDiff(task.date)<=3 && checkDiff(task.date)>=0 && <h3 style={{
                    'color' : 'violet'
                }}>This task is due soon!</h3>}
                {checkDiff(task.date)<0 && <h3 style={{
                    'color' : 'red'
                }}>This task is overdue!</h3>}
                <p></p>
            </div>
          ))}
        </div>
     );
}
 
export default List;