import {Response, Request, Router, NextFunction, response} from 'express';
import { CharacterApi } from '../../axios';
import { CharactersResponse } from '../../interfaces';
import { charactersSorted } from '../helpers/charactersSorted';
import Character from '../models/Character';
const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const response = await CharacterApi.get<CharactersResponse>("/character");
		const data = response.data.results;
		const next = response.data.info.next;
		const characterDB = await Character.findAll();
	
		if (next !== null){
			const response2 = await CharacterApi.get<CharactersResponse>(next);
			const data2 = response2.data.results;
			res.json([...charactersSorted([...data,...data2]),...characterDB]);
		} else {
			res.json([...charactersSorted(data),...characterDB]);
		}
	} catch (error) {
		res.status(404).json(error);
	}
});

router.post('/', async(req: Request, res: Response) => {
	const { name, status, specie, gender} = req.body;
	console.log(req.body)
	try {
		if(name && status && specie && gender){
			console.log("hola")
			const characterCreate = await Character.create()
			res.json(characterCreate)
		}
	} catch (error) {
		res.status(404).json(error)
	}
	
});

export default router;