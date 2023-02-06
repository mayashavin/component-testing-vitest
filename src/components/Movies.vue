<template>
    <div>
        <h1>Movies</h1>
        <div v-if="isLoading">
            Loading...
        </div>
        <div v-else-if="error">
            Error: {{ error }}
        </div>
        <div v-else>
            <div>
                <label for="search">Search:</label>
                <input type="text" id="search" v-model="searchTerm" />
            </div>
            <ul>
                <li v-for="movie in filteredMovies" :key="movie.id">
                    <article>
                        <h2>{{ movie.title }}</h2>
                        <h3>Released on: {{ movie.release_date }}</h3>
                        <h4>Directed by: {{ movie.director }}</h4>
                        <p>{{ movie.opening_crawl }}</p>
                    </article>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { useMovies } from "../composables/useMovies.js";
import { useSearch } from "../composables/useSearch.js";

const { movies, error, isLoading } = useMovies();
const { searchTerm, filteredItems: filteredMovies } = useSearch(movies);
</script>
<style scoped>
ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    gap: 1rem;
    margin-top: 2rem;
}

li {
    display: inline-flex;
}

article {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    font-size: 12px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

h2 {
    font-size: 16px;
    margin: 0;
    font-weight: semi-bold;
}
</style>
