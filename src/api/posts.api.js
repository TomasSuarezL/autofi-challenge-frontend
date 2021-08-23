export const getPosts = async (page=1) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
    return await response.json();
}

export const getPostComments = async (idPost) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
    return await response.json();
}