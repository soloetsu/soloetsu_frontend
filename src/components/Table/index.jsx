import React from "react";

const Table = ({ context }) => {
		return (
		<ul>
      <li>りんご</li>
      <li>みかん</li>
      <li>{context}</li>
    </ul>
	);
};

export default Table;
