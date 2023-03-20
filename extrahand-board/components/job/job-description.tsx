import { GithubJob } from "../../lib/api"
import { JobApplyButton } from "./job-apply-button"
import { JobHeader } from './job-header'
import { DetailedHTMLProps, ImgHTMLAttributes, useState, useEffect } from "react"
import css from './job.module.css' // styling import
import { fromToday } from "@/lib/date"

export interface JobDescriptionProps extends GithubJob {} 

export const JobDescription: React.FC<JobDescriptionProps> = ({
    title,
    description,
    location,
    type,
    company,
    company_logo,
    how_to_apply,
    created_at
}) => {
    return (
        <div className={css['job-description']}>
            <JobApplyButton html={how_to_apply} />
            <div>
                <JobHeader 
                    title={title}
                    location={location}
                    type={type}
                    company={company}
                    logo={company_logo}
                    daysAgo={fromToday(created_at)}
                />
                <div dangerouslySetInnerHTML={ { __html: description } } />
            </div>
        </div>
    )
}