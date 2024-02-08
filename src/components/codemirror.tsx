import { UnControlled as Code } from 'react-codemirror2';

export default function CodeMirror() {
  return (
    <Code
      value="<h1>I ♥ react-codemirror2</h1>"
      options={{
        mode: 'xml',
        theme: 'material',
        lineNumbers: true,
      }}
      onChange={(editor, data, value) => {
      }}
    />
  );
}
