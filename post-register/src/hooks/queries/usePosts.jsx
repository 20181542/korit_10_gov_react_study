import { useQuery } from "@tanstack/react-query";



export function usePosts(page, size) {

    const requestposts = async (page, size) => {
        const postsJson = localStorage.getItem("posts");
        const posts = !!postsJson ? JSON.parse(postsJson) : [];
        const startIndex = (page - 1) * size;
        const endIndex = startIndex + size;
        const filteredPosts = posts.slice(startIndex, endIndex);
        return filteredPosts;
        
    }


    return useQuery({
        queryKey: ["posts", page, size],
        queryFn: async () => {
            return await requestposts(page, size);
        }
    });
}