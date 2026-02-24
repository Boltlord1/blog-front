function Comment({ data }) {
    return (
        <div>
            <h3>{data.user}</h3>
            <p>{data.text}</p>
        </div>
    )
}

export default Comment