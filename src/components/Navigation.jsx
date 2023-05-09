import Anchor from "./Anchor";

// Frontend
export default function Navigation({ navData }) {
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
