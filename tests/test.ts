import assert from "assert";

import * as day1 from "../src/day1.js";
import * as day2 from "../src/day2.js";

describe("day 1", () => {
    it("should calculate the max calories carried by an elf", () => {
        assert.strictEqual(day1.part1(), 69693);
    });
    it("should calculate how many calories are carried by the top 3 elves carrying the most calories", () => {
        assert.strictEqual(day1.part2(), 200945);
    });
});

describe("day 2", () => {
    it("should calculate the round score", () => {
        assert.strictEqual(day2.getRoundScore({player: day2.PlayerChoice.Paper, opponent: day2.OpponentChoice.Rock}), 8);
        assert.strictEqual(day2.getRoundScore({player: day2.PlayerChoice.Rock, opponent: day2.OpponentChoice.Paper}), 1);
        assert.strictEqual(day2.getRoundScore({player: day2.PlayerChoice.Scissors, opponent: day2.OpponentChoice.Scissors}), 6);
    });
    it("should parse player choice", () => {
        const choice = "X";
        const parsed: day2.PlayerChoice = <day2.PlayerChoice><keyof typeof day2.PlayerChoice>choice;
        assert.strictEqual(parsed, day2.PlayerChoice.Rock);
    });
    it("should compute the problem answer", () => {
        assert.strictEqual(day2.part1(), 9759);
    });
});
