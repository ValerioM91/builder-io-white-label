import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from "~/components/Accordion"

type FAQsProps = {
  FAQs?: {
    question?: {
      id: string
      value: {
        data?: {
          question: string
          answer: string
        }
      }
    }
  }[]
}

type FAQ = {
  id: string
  question: string
  answer: string
}

const FAQs = ({ FAQs }: FAQsProps) => {
  const faqs = FAQs?.reduce((acc: FAQ[], { question: faq }) => {
    if (!faq?.value?.data) return acc

    const {
      id,
      value: {
        data: { answer, question },
      },
    } = faq

    acc.push({ id, question, answer })
    return acc
  }, [])

  return (
    <section className="w-full bg-base-200 py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <AccordionRoot type="single" collapsible>
            {faqs?.map(({ id, question, answer }) => (
              <AccordionItem value={id} key={id}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </div>
      </div>
    </section>
  )
}
export default FAQs
