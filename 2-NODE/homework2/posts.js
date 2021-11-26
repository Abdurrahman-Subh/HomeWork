const posts = [
    { title: "Post Header 1", detail: "Post Detay 1" },
    { title: "Post Header 2", detail: "Post Detay 2" },
  ];
  
  const listPosts = () => {
    posts.map((post) => {
      console.log(`Title: ${post.title} | Detail: ${post.detail}`);
    });
  };
  
  const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve("Post eklendi");
    });
  
    return promise;
  };
  
  addPost({ title: "Post Başlık 35", detail: "Post Detay 35" })
    .then(() => {
      console.log("Yeni post listesi");
      listPosts();
    })
    .catch((error) => {
      console.log(error);
    });
  
  async function showPostsAsync() {
    try {
      await addPost({ title: "Post Başlık random", detail: "Post Detay" });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showPostsAsync();