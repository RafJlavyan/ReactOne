import { useState } from "react"

export function useCounter(initial) {
    const [value,setValue] = useState(initial)

    function increment() {
      setValue(value + 1)
    }

    function decrement() {
      setValue(value - 1)
    }

    return {value,increment,decrement}
}