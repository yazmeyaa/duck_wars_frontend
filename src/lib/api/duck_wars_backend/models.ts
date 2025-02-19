export type UserResponse = {
	id: number;
	telegramId: number;
};

export type Character = {
	id: number;
	userId: number;
	name: string;
	coins: number;
	maxEnergy: number;
	experience: number;
};

