// Data for lab folder links and project folder links
import { labLinks } from "./links.js";

// const projectLinks = [
//   { name: "Project 1", url: "projects/project1/index.html" },
//   { name: "Project 2", url: "projects/project2/index.html" },
//   // Add more project links here
// ];

// Function to add links to a specific section
function addLinks(sectionId, links) {
  const linksContainer = document.getElementById(sectionId);

  links.forEach((link) => {
    const linkItem = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = link.name;
    linkElement.href = link.url;
    linkElement.target = "_blank"; // Open links in a new tab

    linkItem.appendChild(linkElement);
    linksContainer.appendChild(linkItem);
  });
}

// Call the function to add lab folder links and project folder links when the page loads
window.addEventListener("load", () => {
  addLinks("lab-links", labLinks);
  //   addLinks("project-links", projectLinks);
});
