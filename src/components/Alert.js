import { Alert } from "@mui/material"
export default function EditAlert(props) {
    return(
        <>
            <div className="d-none fixed-top my-5" id={props.id} style={{"zIndex":"1060"}}>
                <Alert onClose={()=>{
                    document.getElementById(props.id).classList.add("d-none")
                }} className="w-75 m-auto my-3" variant="filled" severity={props.severity || "success"}>{props.message}</Alert>
            </div>
        </>
    )
}