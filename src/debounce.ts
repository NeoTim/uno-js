// based on https://github.com/chodorowicz/ts-debounce/blob/master/src/index.ts
export type Procedure = (...args: any[]) => void;

export function debounce<F extends Procedure>(func: F, waitMilliseconds = 500): F {
    let timeoutId: any;

    // tslint:disable-next-line: only-arrow-functions
    return function(t: any, ...args: any[]) {
        const context = t;

        const doLater = () => {
            timeoutId = undefined;
            func.apply(context, args);
        };

        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(doLater, waitMilliseconds);
    } as any;
}
