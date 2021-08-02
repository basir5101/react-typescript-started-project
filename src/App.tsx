import './App.css';
import Banner from './components/Banner';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useState } from 'react';


function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  return (
    <>
    <Editor editorState={editorState} onChange={setEditorState} />
      <Banner />
    </>
  );
}

export default App;
