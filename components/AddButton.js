import styled from "styled-components"

const Add_button_style = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    cursor: pointer;
    user-select: none;
`

export default function AddButton({ isAdding, setIsAdding }) {
    return (
        <Add_button_style onClick={() => setIsAdding(!isAdding)}>
            {isAdding ? 'X' : '+'}
        </Add_button_style>
    )
}
