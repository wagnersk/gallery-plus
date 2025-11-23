import InputText from "./input-text";
import SeachIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";


export default function PhotosSearch() {
    const [inputValue, setInputValue] = React.useState('');

    const debouncedSetValue = React.useCallback(
        debounce((value: string) => console.log(`valor com debounce`, value), 200), []
    )

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);
        debouncedSetValue(value);
        console.log(value);
    }

    return (
        <InputText
            placeholder="Buscar foto"
            icon={SeachIcon}
            className="flex-1"
            value={inputValue}
            onChange={handleInputChange}

        />
    );
}