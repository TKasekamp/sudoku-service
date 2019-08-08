import {Get, Post, Route, Body, SuccessResponse, Controller } from 'tsoa';
import {SudokuService} from '../services/sudokuService';
import {Sudoku, SudokuCreationRequest} from '../models/sudoku';

@Route('v1/sudoku')
export class SudokuController extends Controller {
    @Get('{id}')
    public async getSudoku(id: string): Promise<Sudoku> {
        return await new SudokuService().get(id);
    }

    @Get()
    public async getSudokus(): Promise<Sudoku[]> {
        console.log('sadsa');
        return await new SudokuService().getList();
    }

    @SuccessResponse('201', 'Created') // Custom success response
    @Post()
    public async createSudoku(@Body() requestBody: SudokuCreationRequest): Promise<Sudoku> {
        const sudoku = new SudokuService().create(requestBody);
        this.setStatus(201); // set return status 201
        return sudoku;
    }
}