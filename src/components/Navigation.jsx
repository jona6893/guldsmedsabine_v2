import Anchor from "./Anchor";

// Frontend
export default function Navigation() {
  const navData = [
    {
      name: "Forside",
      path: "",
    },
    {
      name: "Smykker",
      path: "smykker",
    },
    {
      name: "Ydelser",
      path: "ydelser",
    },
    {
      name: "Om Sabine",
      path: "om-sabine",
    },
    {
      name: "Events",
      path: "events",
    },
    {
      name: "Kontakt",
      path: "kontakt",
    },
  ];

  return (
    <nav>
      <ul className="flex justify-end gap-4 p-4 max-w-[1450px]">
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
