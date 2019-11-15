import jwt from 'jsonwebtoken';
import config from '../src/config/config';
import { getCurrentEnv } from '../utils/currentEnv';

/**
 * Middleware protecting authenticated routes
 * @param {object} request Request Object
 * @param {Object} response Response Object
 * @param {function} next Next middleware
 * @returns {function | object} Next function on the middleware chain or an error object
 */
const checkAuth = (request, response, next) => {
	const token = request.headers['x-access-token'] || request.params.token;

	if (!token) {
		return response.status(403).json({
			message: 'You need to sign in first'
		});
	}

	if (token) {
		jwt.verify(token, config[getCurrentEnv()].secret, (error, decoded) => {
			if (error) {
				return response.status(401).json({
					message: 'Authentication failed, try signing again'
				});
			}
			request.userId = decoded.id;
			return next();
		});
	} else {
		return next();
	}
};

export default checkAuth;
