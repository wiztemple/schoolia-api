import database from '../src/models';

const { Op } = database.Sequelize;

const attributes = [
	'id',
	'name',
	'username',
	'email',
	'isConfirmed',
	'allowNotifications',
	'bio',
	'course_of_study',
	'year_of_admission',
	'year_of_graduation',
	'schoolname',
	'avatar',
	'createdAt',
	'updatedAt',
	'role'
];
class AuthService {
	/**
 * Function to create a user entity in the database
 * @param {object} user User object
 * @param {string} role User role
 * @returns {object} User object
 */
	static async createUser(user, role) {
		user.role = role;
		const newUser = await database.User.create(user);
		return newUser;
	}

	/**
* Finds a user by parameter
* @param {string} param Parameter to search by
* @param {string} value Parameter value
* @returns {object | null} User object or null if user is not found
*/
	static async getUserByParam(param, value) {
		if (param === 'email') {
			attributes.push('password');
		}

		const user = await database.User.findOne({
			where: { [param]: value },
			attributes
		});

		if (!user) {
			return null;
		}
		return user;
	}

	/**
  * Finds a user by email or username
  * @param { string } email Email to search by
  * @param { string } username Username to search by
  * @returns { object | null } User object or null if user is not found
  */
	static async getUserByCredentials(email, username) {
		const user = await database.User.findOne({
			where: {
				[Op.or]: { email, username }
			},
			attributes
		});

		if (!user) {
			return null;
		}
		return user;
	}

	/**
 * This method finds all non-admin users in the database
 *@returns {object | null} the results from DB
*/
	static async getAllUsers() {
		const allUsers = await database.User.findAll({
			where: {
				role: 'user'
			},
			attributes
		});

		return allUsers;
	}

	/**
   * Removes a user from the database
   * @param {object} user
   * @returns {Object | null} User object or null
   */
	static async deleteUser(user) {
		const userEntity = await this.getUserByParam('username', user.username);

		if (!userEntity) return null;
		await userEntity.destroy();
	}

	/**
 * Updates the user profile
 * @param { object } newData
 * @param { string } username
 * @returns { boolean } true for successful update.
 */
	static async updateUser(newData, username) {
		const updated = await database.User.update(newData, {
			returning: true,
			where: {
				username
			}
		});
		return updated[1][0].dataValues;
	}
}

export default AuthService;
