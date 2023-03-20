import LoadIcon from "mdi-react/RefreshIcon"
import css from './common.module.css'

export const Loader = () => {
    return(
        <LoadIcon className={css.load}/>
    )
}