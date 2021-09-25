import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteNote, GetNotes } from '../services/notes';
import { Button } from 'react-bootstrap';
import { EditNoteModal } from './NoteModal';


export const NotesTable = () => {
    const notes = useSelector(state => state.notesReducer.notes);
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        GetNotes(dispatch);
    }, []);
   

    return <table className='table table-striped'>
        <tbody>
            <div className="todo-list">
            {
                notes.map(n =>
                    <tr key={n.id}>
                    <td className={`${n.isCompleted? 'completed' : 'uncompleted'}`}>{n.value}</td>
                         <td className = "buttonedit" >
                            <EditNoteModal note={n}/>
                        </td>
                    
                        <td className = "buttonedit" >
                            <button className='delete-btn' onClick={() => DeleteNote(dispatch, n)}></button>
                        </td>
                        
                    </tr>
                )
            }
            </div>
        </tbody>
    </table>
}