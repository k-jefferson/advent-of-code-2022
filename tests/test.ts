import assert from "assert";

import * as day1 from "../src/day1.js";

describe("day 1", () => {
    it("should calculate the max calories carried by an elf", () => {
        assert.strictEqual(day1.part1(), 69693);
    });
    it("should calculate how many calories are carried by the top 3 elves carrying the most calories", () => {
        assert.strictEqual(day1.part2(), 200945);
    });
});
