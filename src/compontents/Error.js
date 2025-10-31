import { useRouteError } from "react-router-dom"
export default function Error() {
    const err = useRouteError();
  return (
    <>
    <h1>Error !!!</h1>
     <img src="https://tse2.mm.bing.net/th/id/OIP.UxMv9AkWtnERAvmcoFI2AQHaFj?pid=Api&P=0&h=180" alt="image"></img>
        <h3>{err.status} : {err.statusText}</h3>    
    </>
  )
}
