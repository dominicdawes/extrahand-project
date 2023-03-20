import { DetailedHTMLProps, ImgHTMLAttributes, useState, useEffect } from "react"
import css from './job.module.css' // styling import

export interface JobImageProps 
    extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
    > {
        size: number,
    }

export const JobImage: React.FC<JobImageProps> = ({size, ...props}) => {
    // no need to worry about server side rendering (for now video pt.2 12:12)
    const [loaded, setLoaded] = useState(false)
    const [hydrated, setHydrated] = useState(false)

    // html hydration
    useEffect(() => {
        setHydrated(true)
    }, [])

    const shouldDisplay = loaded ? "block" : "none"

    // hard code h & w of the image tile
    const containerStyle = {
        height: size,
        width: size
    }
    const placeholderStyle = {
        ...containerStyle,
        fontSize: `${size * (1/5)}px`,
        lineHeight: `${size}px`
    }

    return (
        <div className={css['image-container']} style={containerStyle}>
            {!loaded && <div className={css['image-placeholder']} style={placeholderStyle}>not found</div>}
            {hydrated && (
                <img 
                    {...props}
                    style={{ display: shouldDisplay }} 
                    onLoad={() => setLoaded(true)} 
                />
            )}
        </div>
    )
}