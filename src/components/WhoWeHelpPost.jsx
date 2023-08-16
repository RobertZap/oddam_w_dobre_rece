function WhoWeHelpPost({ post, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul>
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