import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { useDarkMode } from '~/lib/dark-mode.ts';

interface IProps {
    height: number;
    markdownMessage: string;
}

export default function MarkdownEdior({ height, markdownMessage }: IProps) {
  const { isDarkMode } = useDarkMode();
  const [value, setValue] = useState<string>(markdownMessage);
  const changeCode = (code: string | undefined) => {
    if (code !== undefined) setValue(code);
  };
  return (
    <div className="container">
      <div data-color-mode={isDarkMode ? 'light' : 'dark'}>
        <MDEditor
          value={value}
          height={height}
          onChange={(value) => changeCode(value)}
        />
      </div>
    </div>
  );
}
