import "/src/scss/WhoWeHelpPost.scss";

function WhoWeHelpPost({ post, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className="post_information">
            {post.map((post) => (
                <li>{post.title}</li>
            ))}
            {post.map((post) => (
                <li>{post.body}</li>
            ))}
        </ul>
    );
}

export default WhoWeHelpPost;
