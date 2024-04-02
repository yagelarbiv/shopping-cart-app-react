
// eslint-disable-next-line react/prop-types
export default function Pagination({ totalAmount, currentPage, setCurrentPage, AmountPerPage }) {
  const totalPages = Math.ceil(totalAmount / AmountPerPage);
  let Array = [];
  for (let i = 0; i < totalPages; i++) {
    Array.push(i);
  }

  return (
    <>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={currentPage === 1 ? "bg-red-950 text-white border-2 rounded-lg font-bold p-4" : "bg-red-500 text-white border-2 rounded-lg font-bold p-4"}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {
          Array.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "bg-red-950 text-white border-2 rounded-lg font-bold p-4" : "bg-red-500 text-white border-2 rounded-lg font-bold p-4"}
              >
                {index + 1}
              </button>
            )
          })
        }
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={currentPage === totalPages ? "bg-red-950 text-white border-2 rounded-lg font-bold p-4" : "bg-red-500 text-white border-2 rounded-lg font-bold p-4"}
          disabled={currentPage * AmountPerPage >= totalAmount}
        >
          Next
        </button>
      </div>
    </>
  )
}
{/*
<button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
          <button>currentPage</button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * AmountPerPage >= totalAmount}
        >
          Next
        </button>
*/}