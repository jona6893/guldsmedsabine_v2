import Navigation from "../components/Navigation";

// Frontend
export default function Layout({ children, navData }) {
  return (
    <>
      <Navigation navData={navData} />
      {children}
      <footer className="min-h-[400px] bg-offWhite">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          ad, porro exercitationem et quas odio culpa vitae accusamus earum,
          architecto in incidunt distinctio voluptate dolorum hic repudiandae
          quos. Fugiat placeat aperiam reiciendis, sequi eaque consectetur.
          Incidunt pariatur consequuntur voluptatem, reiciendis unde at.
        </p>
      </footer>
    </>
  );
}
