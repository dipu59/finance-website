import { Accordion, AccordionItem } from "@heroui/react";

function FAQ() {
  const defaultContent = [
    {
      id: 1,
      heading: "What credit score do I need to apply for a credit card?",
      disc: "You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.",
    },
    {
      id: 2,
      heading: "How can I apply for a credit card online?",
      disc: "You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.",
    },
    {
      id: 3,
      heading: "Are there any annual fees associated with the credit card?",
      disc: "You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.",
    },
    {
      id: 4,
      heading: "How long does it take to receive the credit card once approved?",
      disc: "You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.",
    },
    {
      id: 5,
      heading: "How can I check my credit card balance and transactions?",
      disc: "You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.",
    },
    {
      id: 6,
      heading: "What should I do if my credit card is lost or stolen?",
      disc: "You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.",
    },
    {
      id: 7,
      heading: "Is my credit card information secure?",
      disc: "You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.You can apply for a credit card online by visiting the issuer's website, filling out the application form, and submitting the required documents.",
    },
  ];

  return (
    <Accordion variant="dark">
      {defaultContent.map((item) => (
        <AccordionItem className="border-b border-b-gray-200 pb-2" key={item.id} aria-label={item.heading} title={ <span className="text-base md:text-xl font-semibold text-gray-100">{item.heading}</span>}>
          <p className="text-gray-400 text-xs md:text-sm">{item.disc}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQ;
