import Anchor from "@/components/Anchor";

// Types
interface NavigationProps {
  navData: NavData[];
}

export interface NavData {
  index: number;
  menuItem: MenuItem;
}

interface MenuItem {
  id: number;
  name: string;
  slug: string;
}

// Frontend
export default function Navigation({ navData }: NavigationProps) {
  navData.sort((a, b) => a.index - b.index);
  return (
    <nav>
      <ul>
        {navData.map((item) => {
          return (
            <li key={item.menuItem.id}>
              <Anchor href={`/${item.menuItem.slug}`}>{item.menuItem.name}</Anchor>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
