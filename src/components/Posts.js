import Post from "./Post"

const postData = [
  {
    userName: "barked",
    userProfilePicture: "assets/img/barked.svg",
    postImage: "assets/img/dog.svg"
  },
  {
    userName: "barked",
    userProfilePicture: "assets/img/barked.svg",
    postImage: "assets/img/dog.svg"
  },
  {
    userName: "barked",
    userProfilePicture: "assets/img/barked.svg",
    postImage: "assets/img/dog.svg"
  }
]
export default function Posts(){
    return(
        <div className="posts">
        {postData.map((array, index) => (
        <Post 
          postUserName={array.userName}
          postUserProfilePicture={array.userProfilePicture}
          postImage={array.postImage}
          key={index}/>
        ))}
        </div>
    )
}