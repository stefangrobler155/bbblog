import Link from "next/link";

export default function Pagination({ currentPage, totalPages, basePath }) {
  const maxVisiblePages = 5;
  const pageNumbers = [];
  const delta = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - delta);
  let endPage = Math.min(totalPages, currentPage + delta);

  if (endPage - startPage < maxVisiblePages - 1) {
    if (currentPage <= delta) {
      endPage = Math.min(maxVisiblePages, totalPages);
    } else {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="px-4 py-2 bg-accent text-light-text rounded hover:bg-opacity-90 transition"
        >
          Previous
        </Link>
      )}
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={`px-4 py-2 rounded ${
            page === currentPage
              ? "bg-accent text-light-text"
              : "bg-gray-200 text-dark-text hover:bg-gray-300"
          } transition`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-4 py-2 bg-accent text-light-text rounded hover:bg-opacity-90 transition"
        >
          Next
        </Link>
      )}
    </div>
  );
}