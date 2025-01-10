'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TitleText } from '../title-text';
import { motion } from 'framer-motion';

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

// Add animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FAQSection({
  isLeftAligned = false,
}: {
  isLeftAligned?: boolean;
}) {
  return (
    <section className="w-full bg-black py-8 sm:py-12 md:py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className={`space-y-2 sm:space-y-4 ${isLeftAligned ? 'text-left' : 'text-center'}`}
          variants={itemVariants}
        >
          <TitleText>GET ALL YOUR QUESTIONS ANSWERED HERE</TitleText>
          <p
            className={`text-gray-400 text-base sm:text-lg ${isLeftAligned ? 'hidden' : ''}`}
          >
            Our programs helps motivated students become a career ready hireable
            developers
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem
                value={`item-${index}`}
                className="border-b-0 data-[state=open]:top-left-white-border bg-[#131416] rounded-2xl"
              >
                <div className="w-full">
                  <AccordionTrigger className="text-white hover:no-underline w-full p-4 sm:p-6 md:p-8">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-left">
                      Q: {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 relative">
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
