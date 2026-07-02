import PageNav from "../components/PageNav"
import { Link } from "react-router-dom"

function Homepage() {
    return (
        <div>
            <PageNav/>
            <h1>
            world wise
            </h1>
            <Link to='/app'>go to app</Link>
        </div>

    )
}

export default Homepage
