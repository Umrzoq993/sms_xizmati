import React from "react";
import styled from "styled-components";

export default function ContactForm() {
  return (
    <Section id="contact">
      <div className="content">
        <h2>Savolingiz bormi yoki demo sinov qilmoqchimisiz?</h2>
        <p>
          Quyidagi formani to‘ldiring va biz siz bilan tez orada bog‘lanamiz.
        </p>

        <form data-aos="zoom-in-up">
          <input type="text" placeholder="Ismingiz" required />
          <input type="tel" placeholder="Telefon raqam" required />
          <button type="submit">Yuborish</button>
        </form>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background: #f8f9fa;
  min-height: 100vh;
  scroll-margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;

  .content {
    max-width: 600px;
    width: 100%;
    text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #111;
    }

    p {
      font-size: 1rem;
      margin-bottom: 2rem;
      color: #555;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      input {
        padding: 0.8rem 1rem;
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #ccc;
        outline: none;
      }

      button {
        padding: 0.8rem;
        font-size: 1rem;
        background: #0070f3;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;

        &:hover {
          background: #0059c1;
        }
      }
    }
  }
`;
