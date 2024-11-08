import Post from './Post'
import data from './data'

const Posts=()=>{
    
    
    return(
        <div className="posts">
            {
                data &&//if data exist then show data else dont show anythings 
                data.map(post=>{
                    const {id,title,body}=post;
                    return <Post key={id} title={title} text={body}/>; 
                })
            }

        </div>
        

    )
}
export default Posts;