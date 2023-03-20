import { ElipsisIcon, LeftIcon } from '../common/icon';
import css from './pagination.module.css';

export interface PaginationHasPrevProps {
    value: number;
    onSet(): void;
    onDecrement(): void;
}

export const PaginationHasPrev: React.FC<PaginationHasPrevProps> = ({
    value,
    onSet,
    onDecrement,
}) => {
    const more = `${css['pagination-button']} ${css.more}`;
    return (
        <>
            <div className={css['pagination-button']} onClick={onDecrement}>
                <LeftIcon className={css['pagination-icon']}/>
            </div>

            { value >= 2 && (
                <div className={more}>
                    <ElipsisIcon />
                </div>
            )}
            
            <div className={css['pagination-button']} onClick={onSet}>
                <span className={css['pagination-icon']}>{value}</span>
            </div>
        </>
    )
}