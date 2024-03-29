import axios from "axios";
import { useAppContext, useAuthContext } from "../../../provider";
import { useHistory } from "react-router-dom";

const useHooks = () => {
	const { createNotification, setIsLoading } = useAppContext();
	const { setIsLoggedIn } = useAuthContext();
	const history = useHistory();

	/******************AUTH START**********************/
	const login = async ({ user, password }) => {
		try {
			setIsLoading(true);
			if (!user) return createNotification("You must write the username or email", "warning");
			if (!password) return createNotification("You must type the password", "warning");

			let response = await axios.post("/api/auth/login", { user, password });
			let data = await response.data;

			console.log(data);
			if (!data.status) {
				createNotification(data.message, "error");
				return false;
			}
			setIsLoggedIn(true);
			createNotification(data.message, "success");
			return true;
		} catch (e) {
			alert(e.message);
		} finally {
			setIsLoading(false);
		}
	};

	const resetPassword = async ({ user }) => {
		try {
			setIsLoading(true);
			if (!user) return createNotification("You must write the username or email", "warning");

			let response = await axios.post("/api/auth/reset-password", { user });
			let data = await response.data;

			console.log(data);
			if (!data.status) {
				createNotification(data.message, "error");
				return;
			}

			history.push("/admin/login");
			createNotification(data.message, "success");
		} catch (e) {
			alert(e.message);
		} finally {
			setIsLoading(false);
		}
	};

	/******************AUTH END**********************/

	return { login, resetPassword };
};

export default useHooks;
