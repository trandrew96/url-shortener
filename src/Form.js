import { useEffect, useState } from "react";

const shrtcode_api = "https://api.shrtco.de/v2/shorten";

// Call the shrtcode_api
async function getShortenedUrl(link) {
  try {
    const custom_shrtcode_api = shrtcode_api + "?url=" + link;
    const response = await fetch(custom_shrtcode_api);
    return await response.json();
  } catch (error) {
    return [];
  }
}

// Component that displys all of the links that have been generated so far
function Links({ links }) {
  // We need a way to keep track of which link was copied last
  // so we can update the style of that specific copy button
  const [copiedLink, setCopiedLink] = useState(-1);

  // Copy the shortened URL to the clipboard and update the style of that button
  function handleCopy(index, link) {
    setCopiedLink(index);
    navigator.clipboard.writeText(link);
  }

  // Create the shortened URL boxes by mapping the array of links
  return (
    <div>
      {links.map((link, index) => (
        <div
          className="py-2 my-4 rounded-md mb-2 flex md:flex-row flex-col bg-white items-center px-4 transition-opacity"
          key={link.key}
        >
          <div className="grow flex items-center mr-auto text-left my-4">
            <span>{link.link}</span>
          </div>
          <hr className=" border-gray w-full md:hidden" />
          <div className="grow-0 flex items-center mr-auto text-cyan my-4">
            <span>{link.shortLink}</span>
          </div>
          <button
            className={
              "grow-0 hover:opacity-50 btn-copy h-10 md:ml-5 w-full md:w-24 mb-4 md:mb-0 " +
              (copiedLink == index ? "active" : "")
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

// Form for shortening links AND container for displaying all the links that were created
export default function Form() {
  const [links, setLinks] = useState([
    {
      link: "https://www.google.com/",
      shortLink: "https://shrtco.de/GQa7mU",
      key: 1,
    },
  ]);
  const [inputError, setInputError] = useState("");

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const link = e.target.myLink.value;

    // Display error if link is empty
    if (!link) {
      setInputError("Please add a link");
      return;
    }

    getShortenedUrl(link).then((response) => {
      console.log(response);

      if (response.ok) {
        // add link to the list and clear any errors
        let shortLink = response.result.full_short_link;
        let new_links = [...links];

        new_links.unshift({
          link: link,
          shortLink: shortLink,
          key: links.length + 1,
        });

        console.log(new_links);

        setLinks(new_links);
        setInputError("");
      } else {
        // Display a generic error (there are 10 possible error codes btw)
        switch (response.error_code) {
          case 10:
            setInputError("The link you entered is a disallowed link.");
            break;
          default:
            setInputError("Error. Please check the URL is valid.");
        }
      }
    });
  }

  return (
    <div className="mx-auto">
      {/* Form for shortening links */}
      <div className="bg-darkviolet py-8 px-8 mx-auto rounded-lg bg-[url('/src/img/bg-shorten-desktop.svg')]">
        <form method="post" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col">
            <input
              className="grow px-5 py-4 rounded-md mb-8 md:mb-0"
              placeholder="Shorten a link here..."
              type="text"
              name="myLink"
            ></input>
            <button
              className="grow-0 btn-shorten px-5 py-2 md:ml-4 font-semibold"
              type="submit"
            >
              Shorten It !
            </button>
          </div>
        </form>

        {/* Error message wrapper */}
        <div className="relative">
          <span className="text-red absolute left-0 italic text-sm mt-1">
            {inputError}
          </span>
        </div>
      </div>

      <Links links={links}></Links>
    </div>
  );
}
