import { useEffect, useState } from "react";
import styled from "styled-components";
import TableTitle from './tableTitle';
import { useRouter } from "next/router";
import moment from "moment";

const Table_style = styled.div`
    border: 1px solid black;
    width: 100%;
    display: grid;
    grid-template-rows: min-content;

    .table_item {
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        grid-template-rows: 50px;

        div {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            border: 1px dotted gray;
        }

        .last {
            padding:0 30px;
            justify-content: space-between;
        }
    }

`

export default function Table(props) {
    const router = useRouter();
    const { data } = props;
    const [sortted, setSortted] = useState([]);

    useEffect(() => {
        setSortted(data);
    }, [data])


    // on delete button pressed
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/table/${id}`, {
                method: 'DELETE',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            router.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    const mapData = sortted.map(item => {
        return (
            <div className='table_item' key={item._id}>
                <div>{moment(item.date).format('DD.MM.YYYY HH:mm')}</div>
                <div>{item.name}</div>
                <div>{item.amount}</div>
                <div className='last'>
                    {item.distance}
                    <button onClick={() => handleDelete(item._id)}>
                        Удалить
                    </button>
                </div>
            </div>
        )
    })

    return (
        <Table_style>
            <TableTitle />

            {mapData}
        </Table_style>
    )
}
