import { Router } from "express"

import{
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    getCharacters
} from '../controllers/character.controllers.js';

const router = Router()

router.get('/characters', getCharacters);
router.get('/characters:id', getCharacterById);
router.get('/characters', createCharacter);
router.get('/characters:id', updateCharacter);
router.get('/characters:id', deleteCharacter);

export default router;