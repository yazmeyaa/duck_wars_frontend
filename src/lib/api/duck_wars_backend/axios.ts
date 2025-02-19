import axios from 'axios';
import { env } from '$env/dynamic/public';

const apiBaseUrl = env.PUBLIC_DUCK_WARS_BACKEND_URL || 'http://localhost:8001';

const apiClient = axios.create({
	baseURL: apiBaseUrl,
	timeout: 20000,
	headers: {
		'Content-Type': 'application/json'
	}
});

apiClient.interceptors.request.use((cfg) => {
	const token = window.sessionStorage.getItem('token');
	if (token !== null) {
		cfg.headers.Authorization = `${token}`;
	}

	return cfg;
});

export default apiClient;
