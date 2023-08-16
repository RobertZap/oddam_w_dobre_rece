import "/src/scss/WhoWeHelpSection.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import WhoWeHelpPost from "./WhoWeHelpPost.jsx";
import WhoWeHelpPagination from "./WhoWeHelpPagination.jsx";

import "/src/scss/WhoWeHelpSection.scss";
import Decoration from "./Decoration.jsx";
function WhoWeHelpSection() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3000/employees");
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
        <div className="who_container" id="org">
            <p className="who_paragraph">Komu pomagamy?</p>
            <Decoration />
            <div className="who_pagination">
                <WhoWeHelpPagination
                    postPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </div>
            <WhoWeHelpPost post={currentPosts} loading={loading} />
        </div>
    );
}
export default WhoWeHelpSection;
