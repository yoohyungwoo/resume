import Markdown from '@components/markdown.tsx';
import { useState } from 'react';
// import request from '~/lib/request.ts';

export default function LifeCycle() {
  const [markdown] = useState('### test');
  return (
    <div className="container">
      <Markdown markdownSource={markdown} />
    </div>
  );
}
