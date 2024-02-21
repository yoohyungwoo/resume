import { Outlet } from 'react-router-dom';
import ScrollList from '@components/scroll-list.tsx';
import { exampleList } from '@components/scrollMenuListst.ts';

export default function Example() {
  return (
    <main className="flex">
      <ScrollList list={exampleList} />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
