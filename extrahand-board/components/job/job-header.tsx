import { GithubJob } from "../../lib/api"
import { ClockIcon, GlobeIcon } from "../common/icon"
import {JobImage} from "./job-image"
import { DetailedHTMLProps, ImgHTMLAttributes, useState, useEffect } from "react"
import css from './job.module.css' // styling import

export interface JobHeaderProps {
    title: string,
    location: string,
    type: string,
    company: string,
    logo: string,
    daysAgo: string,
} 

export const JobHeader: React.FC<JobHeaderProps> = ({
    title,
    location,
    type,
    company,
    logo,
    daysAgo,
}) => (
    <>
        <div className={css['title-line']}>
            <h2>{title}</h2>
            <div className={css['job-type']}>{type}</div>
        </div>
        <div className={css['icon-line']}>
            <ClockIcon /> {daysAgo}
        </div>
        <div style={{ display: 'flex'}}>
            <JobImage src={logo} alt={company} size={50} />
            <div className={css['sub-title']}>
                <h3>{company}</h3>
                <span className={css['icon-line']}>
                    <GlobeIcon /> {location}
                </span>
            </div>
        </div>
    </>
)