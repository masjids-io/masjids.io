import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button } from 'react-bootstrap'

const ThirdPartyLogin = () => {
  return (
    <div className="text-center mt-4">
      <p className="text-muted fs-16">Sign in with</p>
      <div className="d-flex gap-2 justify-content-center mt-3">
        <Button variant="soft-primary">
          <IconifyIcon icon="ri:facebook-circle-fill" />
        </Button>
        <Button variant="soft-danger">
          <IconifyIcon icon="ri:google-fill" />
        </Button>
        <Button variant="soft-info">
          <IconifyIcon icon="ri:twitter-fill" />
        </Button>
        <Button variant="soft-dark">
          <IconifyIcon icon="ri:github-fill" />
        </Button>
      </div>
    </div>
  )
}
export default ThirdPartyLogin
