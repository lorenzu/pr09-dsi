//Clase FilterMap
/*
* Clase que implementa
*Operación de filtrado sobre una lista de números (fíjese en cómo funciona la función filter de TypeScript e implemente su operación de filtrado sin hacer uso de dicha función filter). La operación de filtrado recibe como argumento un predicado lógico que se evalúa sobre cada elemento de la lista, esto es, una función que de resultar ser verdadera para el elemento correspondiente por el que se vaya iterando, haga que dicho elemento pase a formar parte de la lista devuelta por la operación de filtrado. En caso de que el predicado sea falso, el elemento se descartará de la lista resultante.
*Operación map sobre la lista de números resultante de la operación de filtrado (sin hacer uso del propio método map proporcionado por TypeScript). En este caso, de un modo similar a la operación filter, la operación map recibe también una función como argumento que permite transformar cada elemento de la lista de entrada aplicándole dicha función.
*Operación reduce (sin hacer uso del propio método reduce proporcionado por TypeScript) sobre la lista resultante de haber aplicado el map. En este caso, la lista de entrada se reduce a un único número.
*/
export abstract class FilterMap {
    abstract reduce(n: number[]): number;

    filter(n: number[], predicate: (num: number) => boolean): number[] {
        const filteredNumbers: number[] = [];
        for (const num of n) {
            if (predicate(num)) {
                filteredNumbers.push(num);
            }
        }
        return filteredNumbers;
    }

    map(n: number[], predicate: (num: number) => number): number[] {
        const transformedNumbers: number[] = [];
        for (const num of n) {
            transformedNumbers.push(predicate(num));
        }
        return transformedNumbers;
    }

    run(n: number[], predicate: (num: number) => boolean, predicate2: (num: number) => number): number {
        const filtered = this.filter(n, predicate);
        const mapped = this.map(filtered, predicate2);
        const reduced = this.reduce(mapped);
        return reduced;
    }

    // Hook
    hookMap(n: number[]): number[] {
        return n;
    }
}

export class FilterMapAddReduce extends FilterMap {
    reduce(n: number[]): number{
        let result = 0;
        for (const num of n) {
            result += num;
        }
        return result;
}

    // hook
    hookMap(n: number[]): number[] {
        console.log("Hook: Adding every number after map");
        return n.map(num => num + 1);
    }
}

export class FilterMapSubReduce extends FilterMap {
    reduce(n: number[]): number{
        let result = 0;
        for (const num of n) {
            result -= num;
        }
        return result;
}
}

export class FilterMapProdReduce extends FilterMap {
    reduce(n: number[]): number{
        let result = 0;
        for (const num of n) {
            result *= num;
        }
        return result;
}
}

export class FilterMapDivReduce extends FilterMap {
    reduce(n: number[]): number{
        let result = 0;
        for (const num of n) {
            result /= num;
        }
        return result;
}
}

