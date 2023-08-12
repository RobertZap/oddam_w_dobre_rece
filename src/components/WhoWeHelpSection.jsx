import "/src/scss/WhoWeHelpSection.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import WhoWeHelpPost from "./WhoWeHelpPost.jsx";
import WhoWeHelpPagination from "./WhoWeHelpPagination.jsx";

function WhoWeHelpSection() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
            );
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="conteiner">
            <WhoWeHelpPost post={currentPosts} loading={loading} />
            <WhoWeHelpPagination
                postPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
}
export default WhoWeHelpSection;
