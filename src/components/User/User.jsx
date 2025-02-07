import { useParams } from "react-router-dom"

useParams
function User() {
    const {id}=useParams()
  return (
    <div className="bg-blue-400 p-8 justify-between text-center">User :{id}</div>
  )
}

export default User