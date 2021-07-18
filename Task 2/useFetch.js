import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [ispending, setpending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont=new AbortController();
    setTimeout(() => {
      fetch(url,{signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setdata(data.data);
          setpending(false);
          setError(null);
        })
        .catch((e) => {
          if(e.name==='AbortError'){
              
          }else{
            setError(e.message);
            setpending(false);
          }
      
        });
    }, 500);

    return ()=>abortCont.abort();
  }, [url]);
  return { data, ispending, error };
};
export default useFetch;
