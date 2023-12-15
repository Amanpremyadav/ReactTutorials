import { useNavigate } from "react-router-dom";


function About() {
    const navigate = useNavigate();

    function clickHandler() {
        navigate('/Support');
    }
    return (
        <div>
            <div>This is About page</div>
            <button onClick={clickHandler}>Go to Support Page</button>
        </div>

    );
}

export default About;