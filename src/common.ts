export const getArraySum = (array: Array<number>): number => {
    return array.reduce((accumulator, value) => accumulator + value, 0);
};
