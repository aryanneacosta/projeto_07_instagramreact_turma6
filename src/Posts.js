import Post from "./Post";

const post = [{
    userimg: "assets/img/meowed.svg",
    username: "meowed",
    img: "assets/img/gato-telefone.svg",
    likedbyimg: "assets/img/respondeai.svg",
    likedby: "respondeai",
    thismany: "101.523"
},
{
    userimg: "assets/img/barked.svg",
    username: "barked",
    img: "assets/img/dog.svg",
    likedbyimg: "assets/img/adorable_animals.svg",
    likedby: "adorable_animals",
    thismany: "99.159"
}];

export default function Posts() {
    return (
        <div class="posts">
            {
            post.map(post => 
            <Post
                userimg={post.userimg}
                username={post.username}
                img={post.img}
                likedbyimg={post.likedbyimg}
                likedby={post.likedby}
                thismany={post.thismany}
            />)
            }
            
        </div>
    );
}