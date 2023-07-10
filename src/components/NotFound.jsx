import '../css/notFound.css'
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <h3>Here are some helpful links:</h3>
            <ul>
                <li>
                    <Link className="link" to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/parts'>Parts List</Link>
                </li>
                <li>
                    <Link to='/partform'>Add A New Part Form</Link>
                    </li>
                </ul>
        </div>
    )
}