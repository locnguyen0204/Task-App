import React from 'react';
import './App.css';
import { NewNoteModal } from './components/NoteModal';
import { NotesTable } from './components/NotesTable';

const App = () => {
  return (
    <div className="todoapp">
      <h3>TASK</h3>
        <div style={{ textAlign: 'right' }}>
          <NewNoteModal />
        </div>
        <NotesTable />
      </div>
  );
}

export default App;
