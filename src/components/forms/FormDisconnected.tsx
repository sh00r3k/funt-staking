import FormContainer from "../Card"
import Button from "@/components/Button"
import { useMetamaskContext } from "@/hooks/useConnectMetamask"

export default () => {
  const { handleConnect } = useMetamaskContext()

  return (
    <>
      <FormContainer className="border-orange text-center items-center">
        <h1 className="uppercase text-3xl leading-none mb-3">
          <span className="font-light">stake</span>
          {" "}
          <span className="font-medium">FUNT</span>
        </h1>
        <h2 className="uppercase text-hint font-light text-lg md:text-xl leading-none">
          Protecting you from you
        </h2>
        <Button className="mt-6 from-orange-600 to-orange-400 w-[220px]" onClick={handleConnect}>
          Connect
        </Button>
      </FormContainer>
    </>
  )
}
