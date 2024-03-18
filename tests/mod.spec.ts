import { expect } from 'chai';
import {FilterMap, FilterMapAddReduce, FilterMapDivReduce, FilterMapProdReduce, FilterMapSubReduce } from '../src/mod'
import 'mocha';

describe('Modificacion', () => {
    const numbers = [1, 2, 3, 4, 5];

    describe('FilterMapAddReduce', () => {
        const processor = new FilterMapAddReduce();

        it('da la lista de todos los números sumados', () => {
            let result = processor.reduce(numbers);
            expect(result).to.equal(15);
        });
    });
    describe('FilterMapDivREduce', () => {
        const processor = new FilterMapDivReduce();

        it('da la lista de todos los números divididos', () => {
            let result = processor.reduce(numbers);
            expect(result).to.equal(0);
        });
    });
    describe('FilterMapSubReduce', () => {
        const processor = new FilterMapSubReduce();

        it('da la lista de todos los números restados', () => {
            let result = processor.reduce(numbers);
            expect(result).to.equal(-15);
        });
    });
    describe('run con addreduce', () => {
        const processor = new FilterMapAddReduce();

        it('filtrar pares y multiplicarlos por 2', () => {
            //filtramos por pares y los multiplicamos x 2
            let result = processor.run(numbers, num => num % 2 === 0, num => num * 2);
            expect(result).to.equal(12);
        });
    });
});
