import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useTheme } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import Styles from './styles.module.css';

type EditorProps = {
  data: string | null | undefined;
  onDataChange: (_data: string) => void;
};

function Editor({ data, onDataChange }: EditorProps) {
  const theme = useTheme<Theme>();
  return (
    <div className={theme.palette.mode === 'dark' ? Styles.editor : ''}>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        config={{
          toolbar: {
            items: [
              'undo',
              'redo',
              '|',
              'heading',
              '|',
              'fontfamily',
              'fontsize',
              'fontColor',
              'fontBackgroundColor',
              '|',
              'bold',
              'italic',
              'strikethrough',
              'subscript',
              'superscript',
              'code',
              '|',
              'blockQuote',
              'codeBlock',
              '|',
              'bulletedList',
              'numberedList',
              'todoList',
              'outdent',
              'indent',
              '|',
              'insertTable',
              'tableColumn',
              'tableRow',
              'mergeTableCells',
            ],
            shouldNotGroupWhenFull: true,
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onDataChange(data);
        }}
      />
    </div>
  );
}

export default Editor;
