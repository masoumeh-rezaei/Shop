'use client'
import Container from '@/components/container'
import Title from '@/components/Title'
import { faqsData } from '@/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const FaqsQuestions = () => {
  const [openItem, setOpenItem] = useState<string | null>('item-0')

  return (
    <Container className="max-w-4xl sm:px-6 lg:px-8 py-12">
      <Title className="text-3xl">Frequently Asked Questions</Title>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={openItem || undefined}
        onValueChange={(val) => setOpenItem(val)}
      >
        {faqsData?.map((item, idx) => {
          const value = `item-${idx}`
          const isOpen = openItem === value

          return (
            <AccordionItem
              key={idx}
              value={value}
              className="group border-b py-4"
            >
              <AccordionTrigger className="text-left text-lg flex items-center justify-between text-gray-800 hover:text-gray-900 w-full">
                <span>{item?.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 w-5 h-5 text-gray-600 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </AccordionTrigger>

              <AccordionContent className="overflow-hidden">
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 mt-2"
                    >
                      {item?.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Container>
  )
}

export default FaqsQuestions
