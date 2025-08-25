import React, { useEffect, useState } from 'react'

const Useeffect = () => {
  const [title, setTitle] = useState([]);
const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setLoading(true)
      const result = await response.json();
    //   console.log("result-->", result)
      const updatedResult= result && result.map((each)=>
    each.title)
    //   console.log("updatedResult-->", updatedResult)
     setTitle(updatedResult); 
           setLoading(false) // update state with fetched title
    };
    fetchData();
  }, []);
  
  console.log(undefined || "Lasya")

  return (
    <div>
  <h3>Fetched Post Title:</h3>
      {loading && <h1> Loading.....</h1>}
    {title.length > 0 ? (<table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          { title.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))
}        </tbody>
      </table>) : "No Data Found"}
    </div>
  )
}

export default Useeffect;
