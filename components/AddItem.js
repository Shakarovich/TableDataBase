import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Add_item_style = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;

    input {
        height: 50px;
    }
    button {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`
export default function AddItem() {
    const router = useRouter();

    // date picker states
    const [date, setDate] = useState(new Date());
    // name ref
    const nameRef = useRef(null);
    const amontRef = useRef(null);
    const distRef = useRef(null);

    const checkStates = () => {
        if (
            nameRef.current.value.length > 0 &&
            amontRef.current.value.length > 0 &&
            distRef.current.value.length > 0
        ) {
            createItem({
                date: date,
                name: nameRef.current.value,
                amount: amontRef.current.value,
                distance: distRef.current.value,
            });
        }
    }

    const createItem = async (body) => {
        try {
            const res = await fetch('http://localhost:3000/api/table', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            router.push('/');

            nameRef.current.value = '';
            amontRef.current.value = '';
            distRef.current.value = '';
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Add_item_style>
            <div>
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    showTimeSelect
                />
            </div>

            <input
                placeholder={'Введите имя'}
                ref={nameRef}
            />
            <input
                placeholder={'Введите количество'}
                ref={amontRef}
            />
            <input
                placeholder={'Введите расстояние'}
                ref={distRef}
            />

            <button onClick={checkStates}>
                Отправить
            </button>
        </Add_item_style>
    )
}
