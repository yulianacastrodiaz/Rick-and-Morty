export interface error {
	status: number;
	message: string;
}

export interface CharactersResponse {
	info: Info;
	results: Character[]
}

export interface Info{
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Location;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

export interface Location{
	name: string;
	url: string;
}

export interface MappedCharacter{
	id: number;
	name: string;
	gender: string;
	species: string;
	image: string;
}
