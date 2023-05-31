import { useState } from "react";
import { useRouter } from "next/router";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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

  async function handleSubmit(event) {
    event.preventDefault();

    //console.log(formData);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "Contact", ...formData }),
      });

      alert("Success!");
      router.push("/kontakt-feedback");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form data-netlify="true" name="Contact" method="post" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="Contact" />
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
          <input
            type="text"
            name="navn"
            value={formData.navn}
            onChange={(e) => setFormData({ ...formData, navn: e.target.value })}
            className={classNames}
          />
        );

      case "email":
        return (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={classNames}
          />
        );

      case "telefon":
        return (
          <input
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
            className={classNames}
          />
        );

      case "besked":
        return (
          <textarea
            type="text"
            name="besked"
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
