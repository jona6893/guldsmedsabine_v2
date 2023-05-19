import { useState } from "react";

export default function KontaktFormular({ formular }) {
  const [formData, setFormData] = useState({
    navn: "",
    email: "",
    telefon: "",
    besked: "",
  });

  function renderFormFields() {
    const components = [];

    for (let field in formular) {
      if (formular.hasOwnProperty(field)) {
        components.push(<FormField field={field} label={formular[field]} formData={formData} setFormData={setFormData} />);
      }
    }

    return components;
  }

  // TODO: forms functionality
  return <form className="flex flex-col gap-4">{renderFormFields()}</form>;
}

function FormField({ field, label, formData, setFormData }) {
  function inputField(classNames) {
    switch (field) {
      case "navn":
        return (
          <input 
            type="text"
            value={formData.navn}
            onChange={(e) => setFormData({ ...formData, navn: e.target.value })}
            className={classNames}
          />
        );

      case "email":
        return (
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={classNames}
          />
        );

      case "telefon":
        return (
          <input
            type="tel"
            value={formData.telefon}
            onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
            className={classNames}
          />
        );

      case "besked":
        return (
          <textarea
            type="text"
            value={formData.besked}
            onChange={(e) => setFormData({ ...formData, besked: e.target.value })}
            className={classNames + " h-36"}
          />
        );
    }
  }

  return (
    <label>
      <span className="block text-lg uppercase text-gold-light font-thin">{label + ":"}</span>
      {inputField(
        "w-full px-2 py-1 bg-grey-light text-offWhite text-lg rounded-md outline-0 border border-gold-dark focus:border-gold-light transition-colors"
      )}
    </label>
  );
}
