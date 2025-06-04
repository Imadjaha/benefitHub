import { useState } from "react";
import BenefitCard from "./BenefitCard";
import { advantages as initialAdvantages } from "../constants";
// import CreateAdvantageForm from "../components/CreateAdvantageFrom";
import { FaPlus } from "react-icons/fa6";

const getInitials = (title: string) => {
  const words = title.split(" ");
  let initials = "";
  if (words.length > 0) initials += words[0][0].toUpperCase();
  if (words.length > 1) initials += words[1][0].toUpperCase();
  return initials || title.slice(0, 2).toUpperCase();
};

export default function BenefitsList() {
  return (
    <div>
      {initialAdvantages.map((advantage) => (
        <BenefitCard
          key={advantage.id || advantage.title}
          initials={advantage.initials || getInitials(advantage.title)}
          title={advantage.title}
          period={advantage.date}
          discount={advantage.discount}
          discountCode={advantage.discountCode}
          status={advantage.status}
        />
      ))}
    </div>
  );
}
