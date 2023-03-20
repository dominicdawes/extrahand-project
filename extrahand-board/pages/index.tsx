import { API_URL, DUMMY_URL, LOCAL_URL, GithubJob } from "../lib/api"
import { Layout } from "../components/layout"
import { JobCard } from "../components/job"
import { useEffect, useState } from "react"
import { SearchBox, SearchType, SearchLocation } from "../components/search";
import { Pagination } from "../components/pagination"
import { Loader } from "@/components/common";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {
  // this is the home page route: '/'

  // initialize form checkbox value
  const [jobs, setJobs] = useState<GithubJob[]>(props.jobs);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(0);

  // handles searchbar intake
  const handleSearch = (term?: string) => {
    setLoading(false)
    fetch('/api', {
      method: 'post',
      body: JSON.stringify({
        term,
        fullTime:type,
        location,
      }),
    })
    .then((res) => res.json())
    .then(setJobs)
    .then(()=>setLoading(false))
    .catch(console.log)
  };
  const handlePageChange = (count: number) => {
    setPage(count - 1)
    // then call search function to query further listings
    handleSearch()
  }
  return (
    <Layout title="Home">
      <SearchBox onSearch={handleSearch} />
      <div className='responsive'>
        <div className='search-widgets'>
          <SearchType checked={type} onChange={setType} />
          <SearchLocation location={location} onChange={setLocation} />
        </div>
        <div className='full-width'>
          {loading ? <Loader /> : jobs.map((job) =>(
            <JobCard key={job.id} {...job}/>
          ))}
        <Pagination 
          current={page + 1}
          onChange={handlePageChange}
          hasNext={jobs.length === 4}
          disabled={loading}
        />
        </div>
      </div>
    </Layout>
  );

  // return (
  //   <Layout title="Home">
  //     {arr.map((element, index) => {
  //       return (
  //         <div key={index}>
  //           <h2>{element}</h2>
  //         </div>
  //       );
  //     })}
  //   </Layout>
  // );
}

export const getServerSideProps = async () => {
  try { 
    const data = await fetch(LOCAL_URL)
    const json = await data.json()
    // return props
    return {
      props: {
        jobs: json
      }
    }
  } catch(err) {
    return {
      props: {
        jobs: []
      }
    }
  }
}