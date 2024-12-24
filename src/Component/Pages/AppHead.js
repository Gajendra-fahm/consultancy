import React from 'react'
import Helmet from "react-helmet";
const AppHead = (props) => {
  const { children, title } = props;
  return (
    <div className="application">
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			{children}
		</div>
  )
}

export default AppHead
