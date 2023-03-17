export const DUMMY_URL = "https://dummyjson.com/users?limit=5"
export const API_URL = "https://jobs.github.com/positions"
export const LOCAL_URL = "http://localhost:5000"

export interface GithubJob {
    id:             string;
    type:           string;
    url:            string;
    created_at:     string;
    company:        string;
    company_url:    string;
    location:       string;
    title:          string;
    description:    string;
    how_to_apply:   string;
    company_logo:   string;
}