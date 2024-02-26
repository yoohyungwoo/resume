import { Outlet } from 'react-router-dom';
import ScrollList from '@components/scroll-list.tsx';
import { codingLists } from '@components/scrollMenuListst.ts';

export default function Study() {
  return (
    <main className="flex">
      <ScrollList list={codingLists} />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
