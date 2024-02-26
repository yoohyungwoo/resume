import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@components/ui/scroll-area.tsx';
import { Separator } from '@components/ui/separator.tsx';

export interface IRouterPath {
  name: string,
  path: string
}
export interface IProps {
  list : IRouterPath[]
}
export default function ScrollList({ list }: IProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setPath] = useState(location.pathname);
  const handleListItemClick = (item: { name: string; path: string }) => {
    navigate(item.path);
    setPath(item.path);
  };

  return (
    <ScrollArea className="h-96 w-80 rounded-md border">
      <div className="p-4">
        {list.map((item, index) => (
          <div
            key={`example-path-key-${item.name}}`}
          >
            <div
              className="cursor-pointer text-sm"
              onClick={() => handleListItemClick(item)}
            >
              {item.name}
            </div>
            { index !== list.length - 1 ? <Separator className="my-2" /> : ''}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
