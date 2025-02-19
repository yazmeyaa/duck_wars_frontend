import apiClient from '../axios';
import type { Character } from '../models';

export const charactersService = {
	async me(): Promise<Character> {
		const response = await apiClient.get<Character>('/v1/characters/me');
		return response.data;
	},

	async getById(id: number): Promise<Character> {
		const response = await apiClient.get<Character>(`v1/characters/${id}`);
		return response.data;
	}
};
