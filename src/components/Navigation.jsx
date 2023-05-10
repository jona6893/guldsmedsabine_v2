import Anchor from "./Anchor";

// Frontend
export default function Navigation() {
  const navData = [
    {
      name: "Forside",
      path: "",
    },
    {
      name: "Kontakt",
      path: "kontakt",
    },
  ];

  return (
    <nav>
      <ul>
        {navData.map((item) => {
          return (
            <li key={item.name}>
              <Anchor href={`/${item.path}`}>{item.name}</Anchor>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
