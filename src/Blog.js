import React from "react";

export default function Blog(props) {
  return (
    <div>
      <section className="content-container">
        <img
          src={`./images/${props.imageUrl}`}
          alt="Greece"
          className="post-img"
        />
        <div className="blog-content">
          <section className="top-section">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 location"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>{" "}
            </span>
            <span className="city">{props.location}</span>
            <a href={props.googleMapsUrl} className="gmaps-link">
              View on Google Maps
            </a>
          </section>
          <section className="bottom-section">
            <h1 className="post-title">{props.title}</h1>{" "}
            <span className="duration">
              {props.startDate} - {props.endDate}
            </span>
            <p>{props.description}</p>
          </section>
        </div>
      </section>
      <hr />
    </div>
  );
}
