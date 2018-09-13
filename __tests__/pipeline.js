import pipe from "../src";

describe("test", () => {
    test("5++ and double to equal 12", () => {
        expect(pipe(5)).toBe(12);
    });

    test("1++ and double to equal 4", () => {
        expect(pipe(1)).toBe(4);
    });
});
