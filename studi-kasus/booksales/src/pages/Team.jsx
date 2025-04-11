import React from 'react';

const teamMembers = [
  {
    name: "Ipin Darmawan",
    role: "Founder & CEO",
    image: "https://i.pinimg.com/236x/cf/93/2f/cf932f47d9a2455824c3d57653d7c386.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Bebek Gejol",
    role: "Lead Developer",
    image: "https://i.pinimg.com/736x/30/24/5d/30245d836d24a5ea9995515f77362312.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Squid Punch",
    role: "Marketing Specialist",
    image: "https://i.pinimg.com/736x/ea/7c/00/ea7c0047d07a7308b6f3d3ced04500bf.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

export default function Team() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Meet Our Team</h2>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flip-card w-100">
              <div className="flip-card-inner">
                <div className="flip-card-front text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mt-4"
                    width="120"
                    height="120"
                  />
                  <div className="card-body">
                    <h5 className="mt-3 mb-1">{member.name}</h5>
                    <p className="text-muted">{member.role}</p>
                  </div>
                </div>

                <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                  <h5 className="mb-3">{member.name}</h5>
                  <p className="text-muted mb-3">{member.role}</p>
                  <div className="d-flex gap-3">
                    <a href={member.social.twitter} className="text-light" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter fa-lg"></i>
                    </a>
                    <a href={member.social.linkedin} className="text-light" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href={member.social.github} className="text-light" target="_blank" rel="noreferrer">
                      <i className="fab fa-github fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tambahkan style */}
      <style>
        {`
          .flip-card {
            background-color: transparent;
            perspective: 1000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 300px;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }

          .flip-card-front {
            background-color: #fff;
            color: black;
          }

          .flip-card-back {
            background-color: #0d6efd;
            color: white;
            transform: rotateY(180deg);
          }

          .flip-card img {
            object-fit: cover;
            border: 4px solid #0d6efd;
          }

          a.text-light:hover {
            color: #ffc107 !important;
          }
        `}
      </style>
    </div>
  );
}
