import styled from "styled-components"

const Table_title_style = styled.div`
background-color: black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px;
    .title {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        border: 1px dotted gray;
        color: white;
    }
`

export default function TableTitle() {
    return (
        <Table_title_style>
            <div className='title'>
                Дата
            </div>
            <div className='title'>
                Название
            </div>
            <div className='title'>
                Количество
            </div>
            <div className='title'>
                Расстояние
            </div>
        </Table_title_style>
    )
}
