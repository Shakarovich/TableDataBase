import { useRef } from 'react';
import styled from "styled-components";
import Link from 'next/link';

const Sorting_style = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 30px;

    select, input, button {
        width: 150px;
        height: 50px;
    }

    input {
        width: 200px;
    }

    button {
        background-color: black;
        color: white;
    }
`



export default function Sorting({ sortingParams }) {
    const firstSelectRef = useRef();
    const secondSelectRef = useRef();
    const inputRef = useRef();

    const handleSortPress = () => {
        console.log({
            first: firstSelectRef.current.value,
            second: secondSelectRef.current.value,
            third: inputRef.current.value,
        })
    }

    return (
        <Sorting_style>

            <select ref={firstSelectRef}>
                <option>
                    Название
                </option>
                <option>
                    Количество
                </option>
                <option>
                    Расстояние
                </option>
            </select>

            <select ref={secondSelectRef}>
                <option>
                    Равно
                </option>
                <option>
                    Содержить
                </option>
                <option>
                    Больше
                </option>
                <option>
                    Меньше
                </option>
            </select>

            <input
                ref={inputRef}
                placeholder={'Введите искомый текст'}
            />

            <Link href='/'>
                <button onClick={handleSortPress}>
                    Применить
                </button>
            </Link>
        </Sorting_style>
    )
}
