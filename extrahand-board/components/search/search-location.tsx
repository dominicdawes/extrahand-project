import GlobeIcon from 'mdi-react/GlobeIcon';
import css from './search.module.css';
import { FormEvent, useState } from 'react'

export interface SearchLocationProps {
    location?: string;
    onChange(location: string): void;
}

export const SearchLocation: React.FC<SearchLocationProps> = ({
    location,
    onChange,
}) => {
    // initialize form button values
    const [value, setValue] = useState("")
    const [selections, setSelections] = useState<string[]>([])

    const handleNewLocation = (e: FormEvent) => {
        e.preventDefault()
        setSelections(Array.from(new Set([...selections, value])));
        onChange(value);
        setValue("");
    }

    return (
        <form onSubmit={handleNewLocation}>
            <h3 className={css['location-header']}>location</h3>
            <div className={css['location-input']}>
                <GlobeIcon />
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            {selections.map((s) => (
                <div key={s}>
                    <input 
                        type="radio" 
                        className={css.checkbox}
                        id={s}
                        name="select"
                        value={s}
                        checked={s === location}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <label htmlFor={s}>{s}</label>
                </div>
            ))}
        </form>
    )
}