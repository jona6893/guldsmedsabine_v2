export default function KontaktFormular({ formular }) {
  console.log(formular);

  // TODO: forms functionality
  return (
    <form>
      {formular.navn && <FormField label={formular.navn} />}
      {formular.email && <FormField label={formular.email} />}
      {formular.telefon && <FormField label={formular.telefon} />}
      {formular.besked && <FormField label={formular.besked} />}
    </form>
  );
}

function FormField({ label }) {
  console.log(Object.keys(label));
  function inputField(label) {
    switch (label) {
      case "navn":
        return <input type="text" />;

      case "email":
        return <input type="text" />;

      case "telefon":
        return <input type="text" />;

      case "besked":
        return <input type="text" />;
    }
  }

  return (
    <label>
      <span>{label}</span>
      {inputField(label)}
    </label>
  );
}
