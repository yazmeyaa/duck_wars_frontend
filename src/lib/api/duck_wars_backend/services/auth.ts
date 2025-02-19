import { useLaunchParams } from '@telegram-apps/sdk-svelte';
import apiClient from '../axios';

export const authService = {
	async loginViaTGInitData() {
		const data = useLaunchParams().initDataRaw;
		const response = await apiClient.post('/v1/auth/login/telegram', {
			initData: data
		});
		const token = response.data.token;
		console.log(token);
		window.sessionStorage.setItem('token', token);
	}
};
