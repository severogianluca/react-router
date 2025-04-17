import axios from "axios";
import { useEffect, useState } from "react"

function ListaDeiPost() {

    const [posts, setPosts] = useState([])

    function getList() {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => setPosts(response.data));
         
      }

      useEffect(getList, [])


    return (
        <>
            <div className="container">
                <h1 className="text-center">Lista dei post</h1>
            </div>
            <div className="container">
                {posts.map((post)=>(
                    <div key={post.id}>
                        <div>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                            <hr />
                        </div>

                    </div>
                ))}
            </div>

        </>
    )
}

export default ListaDeiPost