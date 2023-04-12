import { useEffect, useState } from "react";

const shrtcode_api = "https://api.shrtco.de/v2/shorten";

async function getShortenedUrl(link) {
  try {
    const custom_shrtcode_api = shrtcode_api + "?url=" + link;
    const response = await fetch(custom_shrtcode_api);
    return await response.json();
  } catch (error) {
    return [];
  }
}

function MyComponent({ links }) {
  const [copiedLink, setCopiedLink] = useState(-1);

  function handleCopy(index, link) {
    setCopiedLink(index);
    navigator.clipboard.writeText(link);
  }

  return (
    <div>
      {links.map((link, index) => (
        <div
          className="py-2 border-2 rounded-md mb-2 flex bg-white px-4 my-2"
          key={link.key}
        >
          <div className="grow flex items-center font-semibold mr-auto text-left">
            <span>{link.link}</span>
          </div>
          <div className="grow-0 flex items-center font-semibold text-cyan">
            <span>{link.shortLink}</span>
          </div>
          <button
            className={
              "grow-0 hover:opacity-50 text-white px-4 py-1 rounded-md font-semibold ml-2 w-24 " +
              (copiedLink == index ? "bg-darkviolet" : "bg-cyan")
            }
            onClick={() => {
              handleCopy(index, link.shortLink);
            }}
          >
            <span>{copiedLink == index ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Form() {
  const [links, setLinks] = useState([]);
  const [inputError, setInputError] = useState("");

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;

    const link = e.target.myLink.value;

    if (!link) {
      setInputError("Please add a link");
      return;
    }

    getShortenedUrl(link).then((response) => {
      console.log(response);

      let shortLink = response.result.full_short_link;

      let new_links = [...links];
      new_links.push({
        link: link,
        shortLink: shortLink,
        key: links.length + 1,
      });
      setLinks(new_links);
      console.log(`new links are`);
      console.log(links);

      setInputError("");
    });
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="bg-darkviolet py-8 px-8 mx-auto rounded-md">
        <form method="post" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              className="grow px-5 py-2 rounded-md "
              placeholder="Shorten a link here..."
              type="text"
              name="myLink"
            ></input>
            <button
              className="grow-0 hover:opacity-50 bg-cyan text-white px-5 py-2 rounded-md ml-4 font-semibold"
              type="submit"
            >
              Shorten It !
            </button>
          </div>
        </form>
        <div className="relative">
          <span className="text-red absolute left-0 italic text-sm">
            {inputError}
          </span>
        </div>
      </div>

      <MyComponent links={links}></MyComponent>
    </div>
  );
}
