import React from 'react';
import './List.css';

const person = (props) => {
    return (
        <table className='List' style={props.styleUpdate}>
            <tbody>
                <tr>
                    <td className='listShow' onClick={props.finishClick}><p>{props.input}</p></td>
                    <td className='btnDel' onClick={props.deleteClick}><p>Delete</p></td>
                </tr>  
            </tbody> 
        </table>
    );
};

export default person;