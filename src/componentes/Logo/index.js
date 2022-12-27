import ipam from "../../img/ipam.svg"
import "./estilo.css"

function Logo() {
    return (
        <div className="logo">
            <img src={ipam} alt="ipam"></img>
        </div>
    )
}
export default Logo