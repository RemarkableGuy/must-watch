import Results from "../types/search-results";

class Search {
  readonly corsProxy = "http://localhost:8080/";
  readonly apiEndpoint = "https://www.rottentomatoes.com/napi/search?query=";
  readonly url = `${this.corsProxy}${this.apiEndpoint}`;

  abortController?: AbortController;

  public async getResults(query: string): Promise<Results> {
    this.abortController?.abort();
    this.abortController = new AbortController();

    const response = await fetch(`${this.url}${query}`, {
      signal: this.abortController.signal,
    });
    return response.json();
  }
}

export default new Search();
