import Anchor from "./Anchor";

function Footer({ content }) {
  //console.log(content);

  return (
    <footer className="text-offWhite bg-black py-4 mt-auto">
      <div className="grid p-8 gap-8 max-w-[1450px] mx-auto">
        <div className="flex w-full gap-8 justify-between">
          <img className="w-24" src={content.logo.url} alt="" />
          <ul className="flex gap-4">
            {content.socialMedie.map((item) => {
              return (
                <li className="block h-12 w-12 bg-cover hover:brightness-125 transition-all" style={{ backgroundImage: `url("${item.icon?.url}")` }}>
                  <Anchor href={item.link} target="_blank" className="block h-full w-full" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex max-sm:flex-col gap-x-4 gap-y-8 justify-between">
          <address className="flex flex-col gap-y-2 text-transform not-italic">
            <p>{"Adresse: " + content.adresse}</p>
            <a href={"tel:+45" + content.telefonNummer.replaceAll(" ", "")}>{"Telefon: " + content.telefonNummer}</a>
            <a href={"mailto:" + content.email}>{"Email: " + content.email}</a>
            <p>{"CVR: " + content.cvr}</p>
          </address>

          {content.undersider.map((underside) => {
            return (
              <div className="flex flex-col gap-y-2">
                <h4 className="text-xl font-bold pb-2">{underside.overskrift}</h4>
                {underside.link.map((link) => {
                  return (
                    <a href={link.link} className="transition-colors hover:text-gold-light">
                      {link.titleLink}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
