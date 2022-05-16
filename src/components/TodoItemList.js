import TodoItem from "./TodoItem"

const TodoItemList = ({items}) => {

    return (
        <>
        {
        items.map((SingleItem, index) => {
         return  <TodoItem title={SingleItem.title} isCompleted={SingleItem.
            isCompleted} key={index} />
        } )
    }
        </>
    )
}

export default TodoItemList;