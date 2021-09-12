import {Response, Request, Router, NextFunction, response} from 'express';
import { CharacterApi } from '../../axios';
import { CharactersResponse } from '../../interfaces';
import { charactersSorted } from '../helpers/charactersSorted';
const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const response = await CharacterApi.get<CharactersResponse>("/character");
		const data = response.data.results;
		const next = response.data.info.next;
		if (next !== null){
			const response2 = await CharacterApi.get<CharactersResponse>(next);
			const data2 = response2.data.results;
			res.json(charactersSorted([...data,...data2]));
		} else {
			res.json(charactersSorted(data));
		}
	} catch (error) {
		res.status(404).json(error);
	}
});

router.post('/', (req: Request, res: Response) => {
	res.send('soy la ruta post!');
});

export default router;