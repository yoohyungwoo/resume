import { Outlet } from 'react-router-dom';
import ScrollList from '@components/scroll-list.tsx';
import { studyLists } from '@components/scrollMenuListst.ts';

export default function Study() {
  return (
    <main className="flex">
      <ScrollList list={studyLists} />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
