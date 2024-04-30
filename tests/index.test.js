
const { default: testFunc } = await import("../");

describe("expand some colours", () => {
    test("should not expand", async () => {
        expect(testFunc("#12345678")).toEqual("#12345678");
        expect(testFunc("#aabbccdd")).toEqual("#aabbccdd");
    });

    test("should add alpha", async () => {
        expect(testFunc("#663399")).toEqual("#663399ff");
        expect(testFunc("#aabbcc")).toEqual("#aabbccff");
    });

    test("should expand", async () => {
        expect(testFunc("#abc")).toEqual("#aabbccff");
        expect(testFunc("#f00f")).toEqual("#ff0000ff");
    });
});
