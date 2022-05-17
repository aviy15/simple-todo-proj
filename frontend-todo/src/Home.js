
import List from './List';
import useFetch from './useFetch';

const Home = () => {
      const url = 'http://localhost:4000/api/task/';
      const {data , loading , error} = useFetch(url);
      //if(data)console.log(data.reverse());
      const isempty = (prop) =>{
        if(prop.length===0){
          return(
            <div>Your to-do list is empty!</div>
          );
        }
      }
      return (
        <div className="home">
        <h2>Your To-do List!</h2>
          {error && <div>{error}</div>}
          {(!error) && loading && <div>Loading....</div> }
          {data && isempty(data)}
          {data && <List data={data} isInSearch={false} />}
        </div>
      );
}
 
export default Home;