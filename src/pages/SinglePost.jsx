import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SinglePost() {
    const [loading, setLoading] = useState(true)
    const [post, setPost]= useState(null)
    const { id } = useParams();


    function getPost() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setPost(response.data)
            setLoading(false)
        });

    }

    useEffect(getPost, [id])
    const navigate = useNavigate();
    if(loading){
        return <div>caricamento</div>
    }
    return (
        <>
            <div className="container">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                
                <button
                    onClick={() => navigate(-1)}>
                    Torna alla pagina precedente
                </button>
            </div>

        </>
    )
}

export default SinglePost