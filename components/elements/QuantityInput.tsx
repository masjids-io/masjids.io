'use client'
import { ChangeEvent, useState } from "react"
import * as Icon from 'react-feather'

export default function QuantityInput() {
    const [value, setValue] = useState<number>(1) // Specify the type as number

    const handleUpClick = () => {
        setValue(value + 1)
    }

    const handleDownClick = () => {
        setValue(value - 1)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value) // Convert the value to a number
        setValue(isNaN(newValue) ? 0 : newValue) // Handle non-numeric inputs
    }

    return (
        <div className="input-counter js-input-counter">
            <input
                className="input-counter__counter"
                type="number"
                placeholder="value..."
                value={value}
                onChange={handleInputChange} // Use the new handler for onChange
            />
            <div className="input-counter__controls">
                <button className="input-counter__down js-down" onClick={handleDownClick}>
                    <Icon.Minus className="icon" />
                </button>
                <button className="input-counter__up js-up" onClick={handleUpClick}>
                    <Icon.Plus className="icon" />
                </button>
            </div>
        </div>
    )
}
