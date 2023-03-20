import { useRouter } from "next/router"
import { useEffect } from "react"
import { GithubJob, LOCAL_URL } from "../../lib/api"; // TS interface import
import { Layout } from "../../components/layout"
import { JobDescription } from "@/components/job/job-description";

export interface JobProps {
    job: GithubJob;
    redirect: boolean;
}

export const Job: React.FC<JobProps> = ({ job, redirect }) => {
    const router = useRouter();
    useEffect(() => {
        if (redirect) {
            router.push("/404")
        }
    }, []);
    const title = job?.title ? `${job.title}` : "Job Listing"
    const test = "Test Title"
    console.log("Test Case: ", title)
    return (
    <Layout title={title}>
        { Boolean( job ) && <JobDescription {...job} /> }
    </Layout>
    )
}

export const getServerSideProps = async (context: any) => {
    try {
        const { id } = context.params
        const data = await fetch(`${LOCAL_URL}/${id}`)  // link for detailed descriptions
        const json = await data.json()

        // catch if response is empty [] bc of wrong job.id
        if (json.length == 0){
            return { props: { job: {}, redirect: true  } }
        }
        // console.log("Test Case [id]: ", json_test)  // returns an array with a json inside [{:}]
        return { props: { job: json[0], redirect: false } }
    } catch(err) {
        return { props: { job: {}, redirect: true  } }
    }
}

export default Job