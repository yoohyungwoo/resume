import MarkdownEdior from '@components/ui/markdownEdior.tsx';

export default function Editor() {
  const markdownMessage = `
    ### Markdown Editor 
    
    - height는 숫자형식으로 입력해주시면 됩니다. 
    
    - Dark, Light Mode 지원 합니다.
  `;
  return (
    <MarkdownEdior markdownMessage={markdownMessage} height={350} />
  );
}
