import request from 'supertest';
import app from '../../src/app';
jest.mock('../../src/services/sudokuService');

describe('GET /api/v1/sudoku', () => {
    it('should return array of sudokus', () => {
        request(app).get('/api/v1/sudoku')
            .expect(200)
            .then(({body}) => {
                expect(body.length).toBe(1);
            });
    });
});

describe('GET /api/v1/sudoku/{id}', () => {
    describe('when exists', () => {
        it('should return a sudoku', async () => {
            await request(app).get('/api/v1/sudoku/asdasd')
                .expect(200);
        });
    });

    describe('when does not exist', () => {
        it('should return 404', async () => {
            await request(app).get('/api/v1/sudoku/nothing')
                .expect(404);
        });
    });
});
