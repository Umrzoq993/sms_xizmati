import React from "react";
import styled from "styled-components";
import { FaUserPlus, FaKey, FaPaperPlane, FaChartBar } from "react-icons/fa";
import phoneImg from "../assets/image1.png";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Ro‘yxatdan o‘ting",
    description: "Web panelga kiring yoki ro‘yxatdan o‘ting",
  },
  {
    icon: <FaKey />,
    title: "API kalitini oling",
    description: "Integratsiya uchun maxfiy kalit yarating",
  },
  {
    icon: <FaPaperPlane />,
    title: "Xabaringizni yuboring",
    description: "Oddiy POST so‘rov orqali SMS jo‘nating",
  },
  {
    icon: <FaChartBar />,
    title: "Natijalarni kuzating",
    description: "Dashboard orqali holat va statistikani kuzating",
  },
];

export default function UsageSteps() {
  return (
    <Section id="steps">
      <Left data-aos="fade-up-right">
        <img src={phoneImg} alt="App" />
      </Left>
      <Right data-aos="fade-up-left">
        <h2>Xizmatdan foydalanish oson</h2>
        <StepsWrapper>
          {steps.map((step, idx) => (
            <Step key={idx} data-aos="fade-up">
              <div className="icon">{step.icon}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </Step>
          ))}
        </StepsWrapper>
      </Right>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 4rem 6rem;
  gap: 3rem;
  background: #fff;
  color: #111;
  min-height: 100vh;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    color: #111;
  }
`;

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    background: #0070f3;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
  }
`;
