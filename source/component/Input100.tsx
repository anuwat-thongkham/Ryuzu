import { useState } from "react";

export interface Input100Interface {
    isError: boolean;
    inputValue: string;
}

export default function Input100({ isError, inputValue, ...rest }: Input100Interface) {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value;
        setValue(inputText);
    };

    return (
        <input value={inputValue} {...rest} onChange={handleChange}/>
    );
}
