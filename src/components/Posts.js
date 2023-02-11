import Post from "./Post";

const postData = [
  {
    userName: "barked",
    userProfilePicture: "assets/img/profiles/barked.svg",
    postImage: "assets/img/posts/dog.svg",
    likeNumber: 2,
  },
  {
    userName: "barked",
    userProfilePicture: "assets/img/profiles/barked.svg",
    postImage: "assets/img/posts/dog.svg",
    likeNumber: 3,
  },
  {
    userName: "barked",
    userProfilePicture: "assets/img/profiles/barked.svg",
    postImage: "assets/img/posts/dog.svg",
    likeNumber: 4,
  },
];
export default function Posts() {
  return (
    <div className="posts">
      {postData.map((array, index) => (
        <Post
          postUserName={array.userName}
          postUserProfilePicture={array.userProfilePicture}
          postImage={array.postImage}
          likes={array.likeNumber}
          key={index}
        />
      ))}
    </div>
  );
}
