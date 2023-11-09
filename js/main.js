import { linksData } from "./links.js";

const linksSection = document.querySelector(".links");

function generateLinks(linkData) {
  linkData.forEach((sectionData) => {
    const section = document.createElement("div");
    section.classList.add("section");

    const header = document.createElement("h2");
    header.textContent = sectionData.section;
    section.appendChild(header);

    sectionData.links.forEach((linkData) => {
      const link = document.createElement("button");
      link.textContent = linkData.title;

      if (linkData.links) {
        const subSection = document.createElement("div");
        subSection.classList.add("sub-section");

        let isSubSectionVisible = false;

        link.addEventListener("click", () => {
          isSubSectionVisible = !isSubSectionVisible;
          subSection.style.display = isSubSectionVisible ? "block" : "none";
        });

        linkData.links.forEach((subLinkData) => {
          const subLink = document.createElement("button");
          subLink.textContent = subLinkData.title;

          subLink.addEventListener("click", () => {
            if (subLinkData.url) {
              // Open the URL in a new tab/window
              window.open(subLinkData.url, "_blank");
            } else {
              alert("No content available for this link. Coming soon!");
            }
          });

          subSection.appendChild(subLink);
        });

        section.appendChild(link);
        section.appendChild(subSection);
        subSection.style.display = "none";
      } else if (linkData.type === "no-content-link") {
        link.addEventListener("click", () => {
          alert("No content available for this link. Coming soon!");
        });

        section.appendChild(link);
      } else {
        link.addEventListener("click", () => {
          if (linkData.url) {
            // Open the URL in a new tab/window
            window.open(linkData.url, "_blank");
          } else {
            alert("No content available for this link. Coming soon!");
          }
        });

        section.appendChild(link);
      }

      linksSection.appendChild(section);
    });
  });
}

// Call generateLinks with the initial data to populate the page
generateLinks(linksData);
