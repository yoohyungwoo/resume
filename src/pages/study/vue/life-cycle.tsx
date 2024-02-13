import Markdown from '@components/markdown.tsx';

export default function LifeCycle() {
  const test2:string = '### tets\n test';
  return (
    <div className="container">
      <Markdown markdownSource={test2} />
    </div>
  );
}
