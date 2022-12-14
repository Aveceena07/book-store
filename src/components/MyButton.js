function MyButton(props) {
    const { title, funcClick} = props;

    return (
        <button onClick={funcClick}> {title}</button>
    )
}

export default MyButton
