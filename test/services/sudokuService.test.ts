import { SudokuService } from '../../src/services/sudokuService';
import { Difficulty } from '../../src/models/sudoku';

describe('createSudoku', () => {
    it('should create new sudoku', async () => {
        const payload = {difficulty: Difficulty.Medium}; 
        const response = await new SudokuService().createSudoku(payload);
        expect(response.difficulty).toEqual(payload.difficulty);
    });
});

describe('getSudokus', () => {
    it('should get list of sudokus', async () => {
        const response = await new SudokuService().getSudokus();
        expect(response.length).toEqual(1);
    });
});