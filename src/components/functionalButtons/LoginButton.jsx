import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <div>
    <Link to="/login">
        <button className="bg-white border border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-4 py-1.5 rounded-lg shadow transition">
        Login
        </button>
    </Link>
    </div>
  )
}

export default LoginButton