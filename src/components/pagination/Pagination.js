const Pagination = ({ stadiumsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    
    for (let i = 1; i<= Math.ceil(totalPosts / stadiumsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href={void(0)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;