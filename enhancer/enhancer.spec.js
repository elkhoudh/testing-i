const { enhancer } = require("./enhancer");

describe("enhancer", () => {
  describe("repair", () => {
    it("sets durability to 100", () => {
      expect(enhancer.repair({ durability: 80 }).durability).toBe(100);
    });
  });

  describe("success", () => {
    it("checks if durability > 25", () => {
      expect(() => {
        enhancer.fail({ durability: 26 }).durability;
      }).toThrow();
    });
  });

  describe("fail", () => {});
});
