import React from 'react'

const Pagination = ({pageNumber,Paginate,next,prev,currentPage}) => {
  return (
    <div className="mt-6">
      <>
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-base h-10">
            {pageNumber.length > 0 && (
              <li>
                <a
                  onClick={prev}
                  className=" cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-[#262626] border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previou
                </a>
              </li>
            )}

            {pageNumber.map((item, i) => (
              <li
                onClick={() => Paginate(item)}
                className={
                  currentPage == i + 1
                    ? "cursor-pointer flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-[#262626]"
                    : "cursor-pointer flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300"
                }
              >
                {item + 1}
              </li>
            ))}

            {pageNumber.length > 0 && (
              <li>
                <a
                  onClick={next}
                  className="cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-[#262626] border border-e-0 border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            )}
          </ul>
        </nav>
      </>
    </div>
  );
}

export default Pagination
