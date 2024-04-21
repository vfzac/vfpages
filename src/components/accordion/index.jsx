import { useState } from 'react';
import './styles.css';
import data from './data.js'

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setenableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]); //

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiButton() {
        setMultiple([]);
        setSelected(null);
        setenableMultiSelect(!enableMultiSelect)
    }

    function handMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(copyMultiple);
        console.log(multiple);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => handleMultiButton()}>
                <span style={{ visibility: enableMultiSelect ? 'visible' : 'hidden' }}>
                    ✔
                </span>
                Enable Multi
            </button>
            <div className='accordion'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className='item'>
                            <div onClick={
                                enableMultiSelect ?
                                    () => handMultiSelection(dataItem.id) :
                                    () => handleSingleSelection(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                    <div className='content'>{dataItem.answer}</div>
                                    : null
                            }
                        </div>)
                        : <div>No data found</div>
                }
            </div>
        </div>);
}