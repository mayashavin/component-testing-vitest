import { mount, flushPromises } from "@vue/test-utils";
import Movies from "@/components/Movies.vue";
import { describe, it, expect, vi } from "vitest";
import * as hooks from "@/composables/useMovies";
import * as searchHooks from "@/composables/useSearch";
import { ref } from "vue";

describe("Movies.vue", () => {
  it("render movies correctly", () => {
    vi.spyOn(hooks, "useMovies").mockReturnValue({
      movies: ref([
          { title: "A New Hope" },
          { title: "The Empire Strikes Back" },
          { title: "Return of the Jedi" },
        ]),
        isLoading: false,
        error: false,
      }
    );

    vi.spyOn(searchHooks, "useSearch").mockReturnValue({
      searchTerm: ref(''),
      filteredItems: ref([
        { title: "A New Hope" },
        { title: "The Empire Strikes Back" },
        { title: "Return of the Jedi" },
      ])
    });

    const wrapper = mount(Movies, {});

    expect(wrapper.findAll("li").length).toBe(3);
    expect(wrapper.findAll('h1').length).toBe(1)
    expect(wrapper.find('Loading').exists()).toBe(false)
  });

  it('should change the search term', async () => {
    vi.spyOn(hooks, "useMovies").mockReturnValue({
      movies: ref([
          { title: "A New Hope" },
          { title: "The Empire Strikes Back" },
          { title: "Return of the Jedi" },
        ]),
        isLoading: false,
        error: false,
      }
    );

    const wrapper = mount(Movies, {});

    expect(wrapper.findAll("li").length).toBe(3);

    await wrapper.find('input').setValue('A New Hope')
    expect(wrapper.vm.searchTerm).toEqual('A New Hope')
  })
});
