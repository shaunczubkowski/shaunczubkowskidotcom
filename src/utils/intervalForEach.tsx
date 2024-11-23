interface IntervalForEachProps {
    (array: string[],
    iteratee: (value: any) => void,
    delay: number, indefinite?: boolean): number;
}

export const intervalForEach: IntervalForEachProps = (array, iteratee, delay, indefinite = false
)  => {
    let current = 0;

    let interval = setInterval(() => {
        // Clear interval if not indefinite
        if (!indefinite && current === array.length) {
            clearInterval(interval);
        }
        
        iteratee(array[current]);
        current++;

        if (indefinite && current === array.length) {
            current = 0;
        }

    }, delay)

    return interval;
}

