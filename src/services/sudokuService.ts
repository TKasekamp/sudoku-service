import { SudokuCreationRequest, Sudoku, Status, Difficulty } from '../models/sudoku';

const sudokus: Sudoku[] = [
    {
        id: 'asdasd',
        status: Status.Finished,
        difficulty: Difficulty.Hard
    }
];

export class SudokuService {

    public async createSudoku(request: SudokuCreationRequest): Promise<Sudoku> {
        return {id: 'random', status: Status.Created, difficulty: request.difficulty};
    }

    public async getSudokus() {
        return sudokus;
    }
}