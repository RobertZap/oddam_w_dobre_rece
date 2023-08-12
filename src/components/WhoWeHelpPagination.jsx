function WhoWeHelpPagination({ postPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="pageItem">
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default WhoWeHelpPagination;
