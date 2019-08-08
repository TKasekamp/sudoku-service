import { SudokuCreationRequest, Sudoku, Status, Difficulty } from '../../models/sudoku';

const sudokus: Sudoku[] = [
    {
        id: 'asdasd',
        status: Status.Finished,
        difficulty: Difficulty.Hard
    }
];

export class SudokuService {

    public async create(request: SudokuCreationRequest): Promise<Sudoku> {
        
        return {id: 'random', status: Status.Created, difficulty: request.difficulty};
    }

    public async getList() {
        console.log('hello');
        return sudokus;
    }

    public async get(id: string) {
        return sudokus.find(s => s.id === id);
    }
}