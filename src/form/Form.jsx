import {useState, useCallback} from 'react'
import './style.css';

const Form = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); //value값 초기화

            e.preventDefault();
        },
        [onInsert, value],
    );
    
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <span>제목</span><input type="text" />
                 <span>내용</span><input type="text" placeholder="할 일을 입력하세요"
                  value = {value}
                  onChange={onChange}
                 />               
                <button type="submit">추가하기</button>
        </form>
    );
}



export default Form;