import { Cross1Icon } from "@radix-ui/react-icons"

import Button from "./Button"

type Props = {
  closeModal: () => void
  title: string
}

const ModalHeader = ({ closeModal, title }: Props) => {
  return (
    <div className="mb-7 flex items-center justify-between">
      <h3 className="text-2xl font-bold">{title}</h3>
      <Button variant="ghost" size="iconLg" onClick={closeModal}>
        <Cross1Icon className="text-2xl" />
      </Button>
    </div>
  )
}
export default ModalHeader
