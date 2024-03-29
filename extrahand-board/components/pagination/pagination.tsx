import css from './pagination.module.css';
import { RightIcon, LeftIcon, ElipsisIcon } from "../common/icon"
import { PaginationHasNext } from './has-next'
import { PaginationHasPrev } from './has-prev'

export interface PaginationProps {
    current: number;
    onChange(page: number): void;
    hasNext: boolean;
    disabled: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
    current,
    onChange,
    hasNext,
    disabled
}) => {
    const increment = disabled ? () => {} : () => onChange(current + 1)
    const decrement = disabled ? () => {} : () => onChange(current - 1)
    
    // ()=>() delays the function (video series part 5 - 13:27)
    const setPage = disabled 
        ? () => () => {} 
        : (num: number) => () => onChange(num);
    const active = `${css['pagination-button']} ${css.active}`
    return (
        <div className={css.pagination}>
            <div className={css.flex}>
                {current > 1 && (
                    <PaginationHasPrev 
                        value={current - 1} 
                        onSet={setPage(current - 1)}
                        onDecrement={decrement} 
                    />
                )}
                <div className={active}>
                    <span className={css['pagination-icon']}>{current}</span>
                </div>
                {hasNext && (
                    <PaginationHasNext 
                        value={current + 1} 
                        onSet={setPage(current + 1)}
                        onIncrement={increment} 
                    />
                )}
            </div>
        </div>
    )
}