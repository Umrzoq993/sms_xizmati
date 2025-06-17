import React from "react";
import styled from "styled-components";
import { FaBolt, FaShieldAlt, FaChartLine } from "react-icons/fa";
import img from "../assets/image3.png";

export default function WhyChooseUs() {
  return (
    <Section id="why">
      <div className="content">
        <div className="left" data-aos="zoom-in-right">
          <img src={img} alt="Why Choose Us" />
        </div>
        <div className="right" data-aos="zoom-in-left">
          <h2>Nega bizning SMS shlyuz xizmatini tanlash kerak?</h2>
          <p>
            Biz sizning biznesingizni rivojlantirish uchun tezkor va ishonchli
            SMS yuborish xizmatini taqdim etamiz. Har bir xabaringiz maqsadli
            auditoriyangizga o‘z vaqtida yetib boradi.
          </p>
          <div className="features">
            <div className="feature">
              <FaShieldAlt size={28} />
              <span>Ishonchli tizim</span>
            </div>
            <div className="feature">
              <FaBolt size={28} />
              <span>Tez yetkazish</span>
            </div>
            <div className="feature">
              <FaChartLine size={28} />
              <span>Statistik kuzatuv</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background: #f9f9f9;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    gap: 2rem;
    align-items: center;
  }

  .left img {
    width: 100%;
    max-width: 450px;
  }

  .right {
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #111;
    }

    p {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 2rem;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .feature {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.1rem;
        color: #222;

        svg {
          color: #0070f3;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .features {
      align-items: center;
    }
  }
`;
