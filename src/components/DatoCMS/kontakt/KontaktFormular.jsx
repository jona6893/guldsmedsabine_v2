import { useState } from "react";
import { useRouter } from "next/router";

export default function KontaktFormular({ formular }) {
  const router = useRouter();

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
        components.push(<FormField key={field} field={field} label={formular[field]} formData={formData} setFormData={setFormData} />);
      }
    }

    return components;
  }

  // TODO: forms functionality
  async function submitForm(e) {
    e.preventDefault();
    console.log(formData);

    fetch('https://gold-creepy-seal.cyclic.app/send', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        email: formData.email,  // Extract the email address from the formData
        data: formData  // Send the entire formData as another field
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
 


    router.push("/kontakt-feedback");
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => submitForm(e)}>
      {renderFormFields()}
      <button
        type="submit"
        className="bg-gold-dark px-8 py-2 uppercase w-max rounded-full text-offWhite hover:bg-gold-light transition-colors min-w-[10rem] mx-auto mt-8"
      >
        Send
      </button>
    </form>
  );
}

function FormField({ field, label, formData, setFormData }) {
  function inputField(classNames) {
    switch (field) {
      case "navn":
        return (
          <input type="text" value={formData.navn} onChange={(e) => setFormData({ ...formData, navn: e.target.value })} className={classNames} />
        );

      case "email":
        return (
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={classNames} />
        );

      case "telefon":
        return (
          <input type="tel" value={formData.telefon} onChange={(e) => setFormData({ ...formData, telefon: e.target.value })} className={classNames} />
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
      <span className="block uppercase text-gold-light font-thin">{label + ":"}</span>
      {inputField(
        "w-full px-2 py-1 bg-grey-light text-offWhite text-lg rounded-md outline-none border border-gold-dark focus:border-gold-light transition-colors"
      )}
    </label>
  );
}
