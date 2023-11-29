import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { useElapsedTime } from "../useElapsedTime";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("useElapsedTime", () => {
  it("should calculate elapsed time in seconds", () => {
    const now = new Date();
    vi.setSystemTime(now);

    const tenSecondsAgo = new Date(now.getTime() - 10 * 1000);
    const input = {
      seconds: Math.floor(tenSecondsAgo.getTime() / 1000),
      nanoseconds: (tenSecondsAgo.getTime() % 1000) * 1000000,
    };

    const { elapsedTime } = useElapsedTime(input);
    expect(elapsedTime.value).toBe("10 seconds ago");
  });

  it("should calculate elapsed time in minutes", () => {
    const now = new Date();
    vi.setSystemTime(now);

    const twominutesAgo = new Date(now.getTime() - 2 * 60000);
    const input = {
      seconds: Math.floor(twominutesAgo.getTime() / 1000),
      nanoseconds: (twominutesAgo.getTime() % 1000) * 1000000,
    };
    const { elapsedTime } = useElapsedTime(input);
    expect(elapsedTime.value).toBe("2 minutes ago");
  });

  it("should calculate elapsed time in hours", () => {
    const now = new Date();
    vi.setSystemTime(now);

    const twoHoursAgo = new Date(now.getTime() - 2 * 3600000); // 2 heures avant
    const input = {
      seconds: Math.floor(twoHoursAgo.getTime() / 1000),
      nanoseconds: (twoHoursAgo.getTime() % 1000) * 1000000,
    };

    const { elapsedTime } = useElapsedTime(input);
    expect(elapsedTime.value).toBe("2 hours ago");
  });

  it("should calculate elapsed time in days", () => {
    const now = new Date();
    vi.setSystemTime(now);

    const twoDaysAgo = new Date(now.getTime() - 2 * 86400000);
    const input = {
      seconds: Math.floor(twoDaysAgo.getTime() / 1000),
      nanoseconds: (twoDaysAgo.getTime() % 1000) * 1000000,
    };

    const { elapsedTime } = useElapsedTime(input);
    expect(elapsedTime.value).toBe("2 days ago");
  });

  it("should calculate elapsed time in weeks", () => {
    const now = new Date();
    vi.setSystemTime(now);

    const twoWeeksAgo = new Date(now.getTime() - 2 * 604800000);
    const input = {
      seconds: Math.floor(twoWeeksAgo.getTime() / 1000),
      nanoseconds: (twoWeeksAgo.getTime() % 1000) * 1000000,
    };

    const { elapsedTime } = useElapsedTime(input);
    expect(elapsedTime.value).toBe("2 weeks ago");
  });

  it("should calculate elapsed time in months", () => {
    const now = new Date();
    vi.setSystemTime(now);

    const twoMonthsAgo = new Date(now.getTime() - 2 * 2592000000);
    const input = {
      seconds: Math.floor(twoMonthsAgo.getTime() / 1000),
      nanoseconds: (twoMonthsAgo.getTime() % 1000) * 1000000,
    };

    const { elapsedTime } = useElapsedTime(input);
    expect(elapsedTime.value).toBe("2 months ago");
  });

  it("should calculate elapsed time in years", () => {
    const now = new Date();
    vi.setSystemTime(now);

    const oneYearAgo = new Date(now.getTime() - 31536000000);
    const input = {
      seconds: Math.floor(oneYearAgo.getTime() / 1000),
      nanoseconds: (oneYearAgo.getTime() % 1000) * 1000000,
    };

    const { elapsedTime } = useElapsedTime(input);
    expect(elapsedTime.value).toBe("1 year ago");
  });

  it("should calculate elapsed time for a specific date", () => {
    const now = new Date("2023-01-01T00:00:00Z");
    vi.setSystemTime(now);

    const input = "2022-01-01T00:00:00Z";
    const { elapsedTime } = useElapsedTime(input);

    expect(elapsedTime.value).toBe("1 year ago");
  });
});
