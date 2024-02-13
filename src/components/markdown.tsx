import MDEditor from '@uiw/react-md-editor';

interface IProps {
    markdownSource: string
}

export default function Markdown({ markdownSource }: IProps) {
  return (
    <div className="container">
      <MDEditor.Markdown
        source={markdownSource}
      />
    </div>
  );
}
