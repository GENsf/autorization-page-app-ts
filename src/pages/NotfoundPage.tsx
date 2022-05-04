import React from 'react'
import {Link} from "react-router-dom";

const NotfoundPage =() => {
  return (
	 <div>
		<h1>Page Not Found</h1>
		<p>
			<Link to="/">Home Page</Link>
		</p>
	 </div>
  )
}

export default NotfoundPage