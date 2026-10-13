import useFetch from "../useFetch";

const Books = () => {

    const { data, loading, error } = useFetch("http://localhost:3000/books");

    console.log(data);
    // 1. Display all the book titles present in your database.
    
    return (
        <div>
            <h2>All Books</h2>
            <ul>
                {
                    data?.data?.map((book) => (
                        
                        <li key={book._id}>{book.title}</li>
                        
                    ))
                }
            </ul>
        </div>
    )

}

export default Books;