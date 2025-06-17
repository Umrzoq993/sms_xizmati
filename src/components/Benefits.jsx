import React from "react";
import styled from "styled-components";
import {
  FaBolt,
  FaLock,
  FaCode,
  FaChartLine,
  FaDollarSign,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaBolt />,
    title: "Tez Yetkazish",
    description: "SMS'lar 1–3 soniyada manzilga yetkaziladi.",
  },
  {
    icon: <FaLock />,
    title: "Xavfsizlik",
    description: "Ma'lumotlaringiz shifrlanadi va himoyalangan.",
  },
  {
    icon: <FaCode />,
    title: "API Qo‘llab-quvvatlovi",
    description: "Oddiy va tez integratsiya imkoniyati.",
  },
  {
    icon: <FaChartLine />,
    title: "Statistika & Monitoring",
    description: "Har bir xabar holatini kuzatib boring.",
  },
  {
    icon: <FaDollarSign />,
    title: "Arzon Narxlar",
    description: "SMS uchun eng maqbul tariflar.",
  },
];

export default function Benefits() {
  return (
    <Section id="benefits">
      <h2>Xizmat Afzalliklari</h2>
      <Cards>
        {benefits.map((item, idx) => (
          <Card key={idx} data-aos="flip-left">
            <Icon>{item.icon}</Icon>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </Card>
        ))}
      </Cards>
    </Section>
  );
}

// ----------------- Styled -----------------

const Section = styled.section`
  min-height: 100vh;
  scroll-margin-top: 80px;
  background: #f9f9f9;
  padding: 4rem 6rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #111;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 250px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #111;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    color: #666;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #0070f3;
`;
