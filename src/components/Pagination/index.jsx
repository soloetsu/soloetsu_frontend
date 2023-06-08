import React from "react";

const Pagination = () => {
	return (
		<div>
			<style>
				{`
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .page {
          padding: 5px 10px;
          margin: 0 5px;
          background-color: lightgray;
          text-decoration: none;
          color: black;
        }

        .page:hover {
          background-color: gray;
          color: white;
        }
        `}
			</style>

			<div className="pagination">
				<a href="#" className="page">
					1
				</a>
				<a href="#" className="page">
					2
				</a>
				<a href="#" className="page">
					3
				</a>
				<a href="#" className="page">
					4
				</a>
				<a href="#" className="page">
					5
				</a>
			</div>
		</div>
	);
};

export default Pagination;
