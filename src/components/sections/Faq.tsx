"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";
import { FAQS } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const mid = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, mid);
  const rightFaqs = FAQS.slice(mid);

  return (
    <section className="bg-background">
      <div className="section-container">
        <SectionHeading
          eyebrow="Help Center"
          title="Frequently asked questions"
        />

        <Reveal className="grid gap-0 tablet:grid-cols-2 tablet:gap-x-12 desktop:gap-x-20">
          <div>
            {leftFaqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
          <div>
            {rightFaqs.map((faq, i) => {
              const index = i + mid;
              return (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
