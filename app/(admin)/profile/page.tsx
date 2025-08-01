import { Button, Col, Row } from 'react-bootstrap'
import profileBg from '@/assets/images/bg-profile.jpg'
import PageTitle from '@/components/PageTitle'
import type { Metadata } from 'next'
import Image from 'next/image'
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'


export const metadata: Metadata = { title: 'Profile' }

const Profile = () => {
  return (
    <>
      <PageTitle title="Profile" />
      <Row>
        <Col sm={12}>
          <div className="profile-bg-picture" style={{ backgroundImage: 'url("/img/forms/bg.png")', backgroundPosition: 'bottom' }} />
          <div className="p-sm-3 p-0 profile-user">
            <Row className="g-2">
              <Col lg={3} className="d-none d-lg-block">
                <div className="profile-user-img p-2 text-start">
                  <Image src={avatar1} alt="avatar" className="img-thumbnail avatar-lg rounded" />
                </div>
                <div className="text-start p-1 pt-2">
                  <h4 className=" fs-17 ellipsis">Mabruk</h4>
                  <p className="font-13"> admin</p>
                </div>
                <div className="pt-3 ps-2">
                  <p className="text-muted mb-2 font-13">
                    <strong>Gender :</strong> <span className="ms-2">Male</span>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <strong>Mobile :</strong>
                    <span className="ms-2"> 123 1234</span>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <strong>Email :</strong> <span className="ms-2">user@email.domain</span>
                  </p>
                  <p className="text-muted mb-1 font-13">
                  </p>
                </div>
              </Col>
              <Col lg={9} className="bg-light-subtle ">
                <div className="col-12 mb-2">
                  <label className='mb-2' htmlFor="">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="username"
                    className="form-control"
                  />
                </div>
                <div className="col-12 mb-2">
                  <label className='mb-2' htmlFor="">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="col-12 mb-2">
                  <label className='mb-2' htmlFor="">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="firstName"
                    className="form-control"
                  />
                </div>
                <div className="col-12 mb-2">
                  <label className='mb-2' htmlFor="">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="lastName"
                    className="form-control"
                  />
                </div>


                <div className="col-12 mb-2">
                  <label className='mb-2' htmlFor="">Phone number</label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="phoneNumber"
                    className="form-control"
                  />
                </div>

                <div className="col-12 mb-2">
                  <label className='mb-2' htmlFor="">Gender</label>
                  <select name="gender" className="form-select" >
                    <option value="" disabled>Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>

              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Profile
