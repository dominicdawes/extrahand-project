import { API_URL, DUMMY_URL, LOCAL_URL, GithubJob } from "../lib/api"
import { Layout } from "../components/layout"
import { JobCard } from "../components/job"

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {

  // sanity check
  const arr = ['bobby', 'hadz', 'com'];
  return (
    <Layout title="Home">
      {props.jobs.map((job) => (
          <JobCard key={job.id} {...job}/>
      ))}
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

export const  getServerSideProps = async () => {
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