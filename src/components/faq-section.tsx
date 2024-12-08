import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of spaces do you offer?",
    answer: "We offer a variety of spaces including 1LXCV, 2LXCV, 1SCV, 2SCV, 2LXWV, 1LXWV, 2SWV, as well as areas like Pool & Jacuzzi, Gym, and Restaurant."
  },
  {
    question: "Can I view the spaces in person?",
    answer: "Yes, we offer in-person viewings. Please contact our sales team to schedule an appointment."
  },
  {
    question: "What are the pricing options?",
    answer: "Pricing varies depending on the type and size of the space. Please reach out to our sales team for detailed pricing information."
  },
  {
    question: "Are there any ongoing maintenance fees?",
    answer: "Yes, there are maintenance fees associated with our spaces. The exact amount depends on the type and size of the space. We'll provide you with a detailed breakdown during the sales process."
  },
  {
    question: "What amenities are included?",
    answer: "Amenities vary by space type but may include access to common areas, fitness facilities, pools, and restaurants. Specific amenities for each space are listed in their individual descriptions."
  }
]

export default function FaqSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

