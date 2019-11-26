import AuthService from '../services/AuthService';
import { hash, compare } from '../utils/passwordUtils';
import createToken from '../utils/jwt';
class AuthController {
	/**
  * Register new User
  * @param {object} request Request Object
  * @param {object} response Response Object
  * @returns {object} User Object
  */
	static async signup(request, response) {
		try {
			const { name, email, username, password } = request.body;

			const user = await AuthService.getUserByCredentials(email, username);
			if (user) {
				return response.status(409).json({
					message: 'This account already exists. Consider signing in'
				});
			}
			const newUser = await AuthService.createUser(
				{
					name,
					email,
					username,
					password: hash(password)
				},
				'user'
			);

			const token = createToken(newUser.id);
			return response.status(201).json({
				message: `Hello ${newUser.username}, Welcome to Schoolia.`,
				token
			});
		} catch (error) {
			console.log(error);
		}
	}
	/**
 * Login a User
 * @param {object} request Request Object
 * @param {object} response Response Object
 * @returns {object} User Object
 */
	static async signin(request, response) {
		try {
			const { email, password } = request.body;
			const findUser = await AuthService.getUserByParam('email', email);
			if (findUser) {
				const validatePassword = await compare(password, findUser.password);
				if (validatePassword === false) {
					return response.status(401).json({
						message: 'incorrect password'
					});
				}
				const token = createToken(findUser.id);
				return response.status(200).json({
					message: `Hello ${findUser.username}, Welcome Back!`,
					token
				});
			}
			return response.status(404).json({
				message: 'This account does not exist. Consider signing up.'
			});
		} catch (error) {
			console.log(error);
		}
	}
}
export default AuthController;
