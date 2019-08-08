export interface Sudoku {
    id: string;
    status: Status;
    difficulty: Difficulty;
}

export enum Status {
    Created = 'Created',
    Finished = 'Finished',
}

export interface SudokuCreationRequest {
    difficulty: Difficulty;
}

export enum Difficulty {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard',
}