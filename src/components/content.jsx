import '../App.css';
import Myleft from './Left'
import Myright from './Right'

function content() {
    return(
        <div className="main">
            <Myleft/> 
            <p> Main Content </p>
            <Myright/>
        </div>
    )
}
    export default content