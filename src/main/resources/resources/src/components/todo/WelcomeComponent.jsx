import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from "./security/AuthContext";

function WelcomeComponent() {

    const {username} = useParams();

    const [message, setMessage] = useState(null);

    const authContext = useAuth();

    function callHelloWorldRESTAPI() {
        console.log("called");

        // We will make use of axios framework to call a REST API
        /*axios.get('http://localhost:8080/hello-world-bean')
             .then( (response) => successfulResponse(response) )
             .catch( (error) => errorResponse(error) )
             .finally ( () => console.log('cleanup'));*/
        //retrieveHelloWorldBean()
        retrieveHelloWorldPathVariable('Tshepo', authContext.token)
        .then( (response) => successfulResponse(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup') );
    }

    function successfulResponse(response) {
        console.log(response);
        setMessage(response.data.message);
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="Welcome">
            <div>
                <h1>Welcome {username}</h1>
            </div>
            <div>
                Your todos. <Link to="/todos">Manage</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRESTAPI}>Call Hello World REST API</button>
            </div>
            <div className="text-info">
                {message}
            </div>
        </div>
    );
}

export default WelcomeComponent;