import React from "react";
import styled from "styled-components";
import img1 from "../assets/image1.png"; // Sizning telefon rasmingiz

export default function HeroSection() {
  return (
    <Section id="hero">
      <div className="left" data-aos="fade-right">
        <h1>📲 Tez, Ishonchli va Arzon SMS Xizmatlari</h1>
        <p>
          Bizning SMS shlyuz xizmatimiz orqali mijozlaringizga tez va samarali
          tarzda xabar yuboring.
        </p>

        <ul className="features">
          <li>✅ Yuksak yetkazish foizi</li>
          <li>✅ API integratsiyasi</li>
          <li>✅ Statistik kuzatuv</li>
        </ul>

        <button className="cta-btn">👉 Bepul RO‘YXATDAN O‘TISH</button>
      </div>

      <div className="right" data-aos="fade-left">
        <img src={img1} alt="App Preview" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 6rem 6rem 2rem;
  background: #f9f9f9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  .left {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h1 {
      font-size: 2.5rem;
      color: #111;
    }

    p {
      font-size: 1.1rem;
      color: #555;
      max-width: 500px;
    }

    .features {
      list-style: none;
      padding: 0;

      li {
        font-size: 1rem;
        color: #333;
        margin: 0.3rem 0;
      }
    }

    .cta-btn {
      background: #0070f3;
      color: white;
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 1rem;

      &:hover {
        background: #005ad1;
      }
    }
  }

  .right {
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 500px;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;

    .left {
      align-items: center;
    }

    .right {
      margin-top: 2rem;
    }
  }
`;
