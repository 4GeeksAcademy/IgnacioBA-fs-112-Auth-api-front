import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("access_token");
		dispatch({ type: "LOGOUT" });
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
			<Link className="navbar-brand" to="/">MyApp</Link>

			<div className="collapse navbar-collapse">
				<ul className="navbar-nav me-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">Home</Link>
					</li>

					{/* Private link only if authenticated */}
					{store.isAuth && (
						<li className="nav-item">
							<Link className="nav-link" to="/private">Private</Link>
						</li>
					)}
				</ul>

				<ul className="navbar-nav ms-auto">
					{!store.isAuth ? (
						<>
							<li className="nav-item">
								<Link className="nav-link" to="/login">Login</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/signup">Signup</Link>
							</li>
						</>
					) : (
						<li className="nav-item">
							<button className="btn btn-outline-danger" onClick={handleLogout}>
								Logout
							</button>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;