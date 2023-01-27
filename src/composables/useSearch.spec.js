import { expect, describe, it } from "vitest";
import { useSearch } from "./useSearch";

describe("useSearch", () => {
  it("should return default value of searchTerm and original items", () => {
    const items = {value: [{ name: "1" }, { name: "2" }]};

    const { searchTerm, filteredItems } = useSearch(items, ['name']);

    expect(searchTerm.value).toBe("");
    expect(filteredItems.value).toEqual(items.value);
  });

  it("should change searchTerm and return filtered items", () => {
    const items = { value: [{ name: "1" }, { name: "2" }]};

    const { searchTerm, filteredItems, changeSearchTerm } = useSearch(items, ['name']);

    changeSearchTerm("1");

    expect(searchTerm.value).toBe("1");
    expect(filteredItems.value).toEqual([{ name: "1" }]);
  });
});
