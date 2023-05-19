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
      path: "#events",
    },
    {
      name: "Kontakt",
      path: "kontakt",
    },
  ];

  return (
    <nav className="mx-auto max-w-[1450px] relative">
      <div className="flex items-center justify-between p-4 w-full">
       <Anchor href={`/`}><img className="w-20" src="/images/sabineLogo.svg" alt="" /></Anchor>
      <ul className="flex justify-end gap-4 p-4 text-offWhite">
        {navData.map((item) => {
          return (
            <li key={item.name} className="text-gold-light">
              <Anchor href={`/${item.path}`}>{item.name}</Anchor>
            </li>
          );
        })}
      </ul>  
      </div>
    </nav>
  );
}
