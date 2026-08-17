import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const PostContext = createContext();
const archiveContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost()),
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : posts;

  const handleAddPost = useCallback(function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }, []);

  function handleClearPosts() {
    setPosts([]);
  }
  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchedPosts, handleAddPost, searchQuery]);
  const valueA = useMemo(() => {
    return {
      onAddPost: handleAddPost,
    };
  },[]);

  return (
    <PostContext.Provider value={value}>
      <archiveContext.Provider value={valueA}>
        {children}
      </archiveContext.Provider>
    </PostContext.Provider>
  );
}
function usePost() {
  const context = useContext(PostContext);
  return context;
}
function useArchive() {
  const context = useContext(archiveContext);
  return context;
}


export { PostProvider, usePost ,useArchive};
