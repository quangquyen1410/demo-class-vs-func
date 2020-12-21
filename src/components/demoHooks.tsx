import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Button from './Button';

let isRun = false;
const DemoHooks = () => {
    if (!isRun) {
        console.log('Constructor cach 1 - cách cùi bắp nhất');
        isRun = true;
    }
    const [counter, setCounter] = useState(0);
    const [visibles, setVisibles] = useState(true);
    const [user, setUser] = useState({
        firstName: 'Nguyen Quang',
        lastName: 'Quyen'
    })

    useEffect(() => {
        console.log('Tương đương với DidMount và DidUpdate - Chạy sau khi render và sau khi state thay đổi')
    })
    useEffect(() => {
        console.log('<=> DidMount Chạy sau khi render 1 - có thể dùng nhiều didmount cho nhiều nghiệp vụ khác nhau')
    }, [])
    useEffect(() => {
        console.log('<=> DidMount Chạy sau khi render 2 - có thể dùng nhiều didmount cho nhiều nghiệp vụ khác nhau')
    }, [])
    useEffect(() => {
        console.log('<=> DidUpdate - Lắng nghe sự thay đổi của counter');
    }, [counter])
    useEffect(() => {
        console.log('<=> DidUpdate - Lắng nghe sự thay đổi của visibles');
    }, [visibles])
    useEffect(() => {
        console.log('<=> DidUpdate - Lắng nghe sự thay đổi của couter và visibles');
    }, [counter, visibles])
    // Hàm cache lại dữ liệu khi user thay đổi thì nó mới cập nhật lại - Không nên lạm dụng - Chỉ khi nào tính toán phức tạp
    const fullName = useMemo(() => {
        return user.firstName + ' ' + user.lastName
    }, [user])
    // Tips => sử dụng như constructor 
    useMemo(() => {
        console.log('useMemo trống <=> Constuctor vì nó không thay đổi deps');
    }, [])
    // Cách khai báo hàm thông thường, sẽ render lại khi component re-render: 
    const handleCounter = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }
    // Cache hàm khi xử lý nghiệp vụ lớn, sẽ re-render khi state thay đổi

    const handleButton = useCallback(() => {
        setVisibles((prevVisibles) => !prevVisibles)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visibles])
    return (
        <div>
            <h1>Demo Hooks</h1>
            <button onClick={handleCounter}>Tăng</button>
            <h2> Counter : {counter}</h2>
            <button onClick={handleButton}>Ẩn hiện button demo</button>
            <br />
            <button onClick={() => setUser({ firstName: 'John', lastName: 'Demo' })}>Thay đổi tên</button>
            <h3>{fullName}</h3>
            {
                visibles && <Button />
            }
        </div>
    )
}
export default DemoHooks;