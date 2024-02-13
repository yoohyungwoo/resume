import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';

export default function MarkdownEdior() {
  const [value, setValue] = useState<string>('**Hello world!!!**');
  const changeCode = (code: string | undefined) => {
    if (code !== undefined) setValue(code);
  };
  return (
    <div className="container">
      <MDEditor
        value={value}
        height={350}
        onChange={(value) => changeCode(value)}
      />
    </div>
  );
}
