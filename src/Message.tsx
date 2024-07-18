function Message() {
    // JSX Javascript XML gets converted to javascript
    const name = 'Kris';
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;