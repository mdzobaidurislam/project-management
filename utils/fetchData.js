const fetchPosts = async () => {
    const response = await fetch(`${process.env.API_URL}/posts`);
    
    return response.json();
  };
module.exports={fetchPosts}