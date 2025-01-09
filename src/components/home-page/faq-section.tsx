import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TitleText } from '../title-text';

const faqs = [
  {
    question: 'How can I get started?',
    answer:
      'Create unlimited shorts videos at once. Auto generate captions, effects, background and music for you.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Our program offers a structured learning path that begins with the fundamentals of programming and progresses to advanced concepts. You can start by creating an account and exploring our curriculum.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Begin your journey by enrolling in our introductory courses. These are designed to help you build a strong foundation in software development.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Getting started is easy! Simply sign up for an account, choose your learning path, and begin with our carefully curated introductory materials.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Start by exploring our comprehensive curriculum. Our platform provides all the resources you need to begin your journey into software development.',
  },
  {
    question: 'How can I get started?',
    answer:
      "Take the first step by registering for our program. You'll get immediate access to our learning materials and can begin your journey right away.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <TitleText>GET ALL YOUR QUESTIONS ANSWERED HERE</TitleText>
          <p className="text-gray-400 text-lg">
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              value={`item-${index}`}
              className={`border-b-0 data-[state=open]:top-left-white-border bg-[#131416] rounded-2xl`}
              key={index}
            >
              <div className="w-full">
                <AccordionTrigger className="text-white hover:no-underline w-full p-8">
                  <span className="text-2xl font-semibold text-left">
                    Q: {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 relative">
                  <div className="px-8 pb-8">{faq.answer}</div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
