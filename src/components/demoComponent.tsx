import React, { Component } from 'react';
import Button from './Button';
type State = {
    counter: number,
    visibles: boolean
}
class DemoComponent extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0,
            visibles: true
        }
        console.log('Constructor - Chạy lần đầu');
    }
    componentWillMount() {
        console.log('WillMount - Hàm chạy trước khi render')
    }

    componentDidMount() {
        console.log('DidMount - Hàm chạy sau khi render')

    }

    componentWillUpdate() {
        console.log('WillUpdate - Chạy trước khi có state thay đổi');
    }

    componentDidUpdate() {
        console.log('DidUpdate - Chạy sau khi có state thay đổi');

    }

    UNSAFE_componentWillUnmount() {
        console.log('WillUnmount - Chạy trước khi component bị xóa');
    }

    render() {

        const handleCount = () => {
            this.setState((prevState) => { return { counter: prevState.counter + 1 } });
        }
        return (
            <div>
                <h1>Demo Class</h1>
                <button onClick={handleCount}>Tăng</button>
                <h2> Counter : {this.state.counter}</h2>
                <button onClick={() => this.setState({ visibles: !this.state.visibles })}>Ẩn hiện button demo</button>

                {
                    this.state.visibles && <Button />
                }
            </div>
        );
    }

}


export default DemoComponent;
