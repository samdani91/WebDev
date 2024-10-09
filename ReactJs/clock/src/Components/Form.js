import React from 'react'

class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'javaScript is awesome',
        library: 'React',
        isAwesome: true
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value
            })
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value
            })
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value
            })
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked
            })
        } else {
            console.log('nothing here')
        }

    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    {/* <input type="text" value={null} /> <br /><br /> */}
                    <input type='text' placeholder='Enter title' value={title} onChange={this.handleChange}></input>
                    <br /><br />
                    <textarea name="text" value={text} onChange={this.handleChange}></textarea>
                    <br /><br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br /><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Form;