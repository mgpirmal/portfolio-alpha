import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import boat from "../boat.jpg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img
        src={boat}
        alt="pirate ship background"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Matt Pirmal"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              New Traveler?{" "}
            </h1>
            <p className="text-green-200 text-lg">{author.bio}</p>
            <a className="text-red-200 text-lg pt-4 hover:text-white" href="mailto:mgpirmal678@gmail.com"><i
                                aria-hidden="true"></i>Email: mgpirmal678@gmail.com</a>
            <a className="text-red-200 text-lg hover:text-white" href="tel:+14076338314"><i aria-hidden="true"></i>Phone: 407-633-8314</a>
            <a className="text-red-200 text- hover:text-white" href="assets/Matthew Pirmal-Resume 2.docx.pdf" download>Download Resume Here!</a>
          </div>
        </section>
      </div>
    </main>
  );
}