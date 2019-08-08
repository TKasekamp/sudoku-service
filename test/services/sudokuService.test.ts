import { SudokuService } from '../../src/services/sudokuService';
import { Difficulty } from '../../src/models/sudoku';

describe('create', () => {
    it('should create new sudoku', async () => {
        const payload = {difficulty: Difficulty.Medium}; 
        const response = await new SudokuService().create(payload);
        expect(response.difficulty).toEqual(payload.difficulty);
    });
});

describe('getList', () => {
    it('should get list of sudokus', async () => {
        const response = await new SudokuService().getList();
        expect(response.length).toEqual(1);
    });
});

describe('get', () => {
    it('should get existing sudoku', async () => {
        const response = await new SudokuService().get('asdasd');
        expect(response).toMatchObject({id: 'asdasd'});
    });

    it('should be undefined for non existing sudoku', async () => {
        const response = await new SudokuService().get('notherer');
        expect(response).toBe(undefined);
    });
});