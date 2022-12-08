import React, { useState } from 'react';
 import 'tinymce/tinymce';
 import 'tinymce/icons/default';
 import 'tinymce/themes/silver';
 import 'tinymce/plugins/link';
 import 'tinymce/plugins/image';
 import 'tinymce/plugins/lists';
 import 'tinymce/plugins/table';
 import 'tinymce/skins/ui/oxide/skin.min.css';
 import 'tinymce/skins/ui/oxide/content.min.css';
 import 'tinymce/skins/content/default/content.min.css';
 import 'tinymce/models/dom/model';
 import { Editor } from '@tinymce/tinymce-react';

 const TextEditor = () => {
   const [contentEditor, setContentEditor] = useState();
   const handleEditorChange = (content, editor) => {
     console.log('Content was updated:', content);
     setContentEditor(content);
   }

   return (
     <Editor
         initialValue="This is the initial content of the editor"
         init={{
           height: 500,
           menubar: true,
           plugins:'lists',
           toolbar: "undo redo | styleselect | fontselect | bold italic | alignleft aligncenter alignright alignjustify | numlist bullist |outdent indent",
  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Oswald=oswald; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
  content_style: "@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap'); body { font-family: Arial; }",
           }}
         value={contentEditor}
         onEditorChange={handleEditorChange}
       />
     );
   }

 export default TextEditor;