import { writable } from 'svelte/store';

interface User {
	id: number;
	telegramId: number;
}

interface Character {
	id: number;
	name: string;
	coins: number;
	maxEnergy: number;
	experience: number;
}

export const user = writable<User | null>(null);
export const character = writable<Character | null>(null);
// TODO: user state.
