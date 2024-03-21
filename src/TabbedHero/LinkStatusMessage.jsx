import { useLinkStatus } from "../LinkStatusContext/LinkStatusProvider"

const LinkStatusMessage = () => {
  const { linkStatusMessage } = useLinkStatus()

  return <h1>{linkStatusMessage}</h1>
}

export default LinkStatusMessage