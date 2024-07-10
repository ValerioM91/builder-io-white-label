import { type DefaultError, useMutation } from "@tanstack/react-query"
import { z } from "zod"
import axios from "redaxios"

import { useFormWithSchema } from "~/utils/useFormWithSchema"

import Button from "~/components/Button"
import Heading from "~/components/Heading"
import Input from "~/components/Input"

type NewsletterProps = {
  buttonLabel: string
  content: string
  heading: string
}

const schema = z.object({
  email: z.string().email(),
})
type Schema = z.infer<typeof schema>

const Newsletter = ({ buttonLabel, content, heading }: NewsletterProps) => {
  const { mutate } = useMutation({
    // Implement here the submit handler fn
    mutationFn: async (data: Schema) => {
      return await axios.post("/newsletter", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onError: (error: DefaultError) => {
      window.alert(error.message)
    },
    onSuccess: () => {
      window.alert("Success!")
    },
  })

  const { handleSubmit, register } = useFormWithSchema({
    schema: z.object({
      email: z.string().email(),
    }),
  })

  return (
    <section className="w-full bg-primary py-12 text-white md:py-16 lg:py-20">
      <div className="container flex flex-col items-center gap-6 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <Heading size="sm">{heading}</Heading>
          <p className="max-w-screen-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{content}</p>

          <form
            onSubmit={handleSubmit(data => mutate(data))}
            className="mx-auto flex w-full max-w-md items-center justify-center space-x-2"
          >
            <Input type="email" placeholder="Enter your email" className="flex-1" {...register("email")} />
            <Button colorSchema="secondary">{buttonLabel}</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Newsletter
