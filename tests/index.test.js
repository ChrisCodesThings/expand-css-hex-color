
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
    test("nothing", async () => {
        expect(testFunc()).toBeUndefined();
    });

    test("boolean", async () => {
        expect(testFunc(true)).toBeUndefined();
    });

    test("a number", async () => {
        expect(testFunc(123)).toBeUndefined();
    });

    test("not a css colour string", async () => {
        expect(testFunc("foo")).toBeUndefined();
    });
});

describe("expand some colours", () => {
    test("should not expand", async () => {
        expect(testFunc("#123456")).toEqual("#123456");
    });

    test("should not expand", async () => {
        expect(testFunc("#aabbccdd")).toEqual("#aabbccdd");
    });

    test("should expand", async () => {
        expect(testFunc("#abc")).toEqual("#aabbcc");
    });

    test("should expand", async () => {
        expect(testFunc("#dead")).toEqual("#ddeeaadd");
    });
});
