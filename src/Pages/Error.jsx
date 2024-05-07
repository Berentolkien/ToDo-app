import {Link} from "react-router-dom"


import "../styles/error.css"

export default function Error() {

  
  return (
    <>
    <div id="notfound">
  <div className="notfound">
    <div className="notfound-404" />
    <h1>404</h1>
    <h2>Oops! Page Not Be Found</h2>
    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
    <Link to="/">Back to homepage</Link>
  </div>
</div>

    
    </>
    

  )
}