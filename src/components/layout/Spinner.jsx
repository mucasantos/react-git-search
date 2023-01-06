import spinner from '../../components/layout/assets/spinner.gif'
function Spinner() {
    return (
    <div className="w-100 mt-20">
        <img 
        className="text-center mx-auto"
        width={180}
        src={spinner} alt='loading'/>
    </div>


    )
}

export default Spinner