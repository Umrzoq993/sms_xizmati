import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Section data-aos="fade-up">
      <div className="container">
        <div className="info">
          <h2>SMS Gateway</h2>
          <p>
            Biz ishonchli va qulay SMS xizmatlarini taqdim etamiz. Savollaringiz
            bo‘lsa, bemalol bog‘laning.
          </p>
        </div>

        <div className="links">
          <h4>Bo‘limlar</h4>
          <ul>
            <li>
              <a href="#about">Biz haqimizda</a>
            </li>
            <li>
              <a href="#terms">Foydalanish shartlari</a>
            </li>
            <li>
              <a href="#privacy">Maxfiylik siyosati</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h4>Aloqa</h4>
          <ul>
            <li>
              <a href="mailto:info@smsgateway.uz">info@smsgateway.uz</a>
            </li>
            <li>
              <a href="https://t.me/smsgateway_bot" target="_blank">
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <p>© 2025 SMS Gateway. Barcha huquqlar himoyalangan.</p>
      </div>
    </Section>
  );
}

const Section = styled.footer`
  background: #111;
  color: #fff;
  padding: 4rem 2rem 2rem;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1200px;
    margin: auto;

    .info,
    .links,
    .contact {
      flex: 1 1 250px;
    }

    h2 {
      color: #ffc107;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: #ccc;
          text-decoration: none;

          &:hover {
            color: #fff;
            text-decoration: underline;
          }
        }
      }
    }

    p {
      font-size: 0.95rem;
      color: #ccc;
    }
  }

  .bottom {
    border-top: 1px solid #333;
    margin-top: 2rem;
    padding-top: 1rem;
    text-align: center;

    p {
      font-size: 0.85rem;
      color: #888;
    }
  }
`;
