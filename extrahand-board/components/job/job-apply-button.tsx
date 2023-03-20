
import Link from "next/link"
import { GithubJob } from "../../lib/api"
import { ArrowIcon } from "../common/icon"
import { DetailedHTMLProps, ImgHTMLAttributes, useState, useEffect } from "react"
import css from './job.module.css' // styling import

export interface JobApplyButtonProps {
    html: string,
} 

export const JobApplyButton: React.FC<JobApplyButtonProps> = ({ html }) => (
    <div className={css['apply']}>
        <Link legacyBehavior href="/">
            <a>
                <ArrowIcon className={css['apply-icon']}/> Back to Search
            </a>
        </Link>
        <h3 className={css["apply-header"]}>how to apply</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
)