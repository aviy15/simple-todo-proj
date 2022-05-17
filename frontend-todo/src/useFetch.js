import {useState , useEffect} from 'react' ;
import axios from 'axios';

const useFetch = (url) =>{
    const [data , setData] = useState([]);
    const [loading , setLoad] = useState(true);
    const [error , setError] = useState(null);
    useEffect(() =>{
        axios.get(url).then(res =>{
            console.log(res.data);
            setData(res.data);
            //console.log(tlist);
            //setData([...res].sort((a , b) => (a.priority - b.priority)));
            //console.log(tlist);
            setLoad(false);
            setError(null);
        });
      } , [url]);
    return {data , loading , error};
}

export default useFetch;