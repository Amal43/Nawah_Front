import React from 'react'
import about from './About.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome/css/font-awesome.css'
import { NavLink } from 'react-router-dom'
import AbdElrahman from '../assets/imgs/photo_6021435555495132975_y.jpg'
import Alaa from '../assets/imgs/photo_6023605179699544189_x.jpg'
import Amal from '../assets/imgs/photo_6023605179699544185_x.jpg'
import Esraa from '../assets/imgs/photo_6023605179699544186_x.jpg'
import Mariam from '../assets/imgs/photo_6023605179699544187_x.jpg'
import Mohamed from '../assets/imgs/photo_6021435555495132975_y.jpg'

function About() {
  return (
    <section className="ecommerce-about-team bg-light bg-opacity-50">
  <div className={about.container}>
    <div className={about['about-us']}>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="text-center mb-5">
          <h2 className="mb-3 team">فريق إدارة المشروع</h2>
          <p className="text-muted fs-15">
            {" "}
            خبرة القائد أولًا وقبل كل شيء، حيث يتمتع بخبرة عميقة في المجال الذي
            يقوده
          </p>
        </div>
      </div>
    </div>
    <div className="row gy-4 justify-content-between">
      <div className="col-xl-2 col-md-6">
        <div className={`${about["team-box"]} ${about["text-center"]}`}>
          <div className={about["team-img"]}>
            <img
              src={AbdElrahman}
              alt=""
              className="img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"
            />
          </div>
          <div className="mt-4 pt-1 me-3">
            <NavLink className={about.name} to="#!">
              <h5 className={about.team}>عبد الرحمن علي</h5>
            </NavLink>
            <p className="text-muted me-3">Our Founder</p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-6">
        <div className="team-box text-center">
          <div className={about["team-img"]}>
            <img
              src={Alaa}
              alt=""
              className="img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"
            />
          </div>
          <div className="mt-4 pt-1">
            <NavLink className={about.name} to="#!">
              <h5 className={about.team}>آلاء أكرم</h5>
            </NavLink>
            <p className="text-muted mb-0">Sr. Manager</p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-6">
        <div className="team-box text-center">
          <div className={about["team-img"]}>
            <img
              src={Amal}
              alt=""
              className="img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"
            />
          </div>
          <div className="mt-4 pt-1">
            <NavLink className={about.name} to="#!">
              <h5 className={about.team}>أمل موسى</h5>
            </NavLink>
            <p className="text-muted mb-0">Marketing Executive</p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-6">
        <div className="team-box text-center">
          <div className={about["team-img"]}>
            <img
              src={Mohamed}
              alt=""
              className="img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"
            />
          </div>
          <div className="mt-4 pt-1">
            <NavLink className={about.name} to="#!">
              <h5 className={about.team}>محمد بدوي</h5>
            </NavLink>
            <p className="text-muted mb-0">Account Executive</p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-6">
        <div className="team-box text-center">
          <div className={about["team-img"]}>
            <img
              src={Esraa}
              alt=""
              className="img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"
            />
          </div>
          <div className="mt-4 pt-1">
            <NavLink className={about.name} to="#!">
              <h5 className={about.team}>إسراء صلاح</h5>
            </NavLink>
            <p className="text-muted mb-0">Account Executive</p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-6">
        <div className="team-box text-center">
          <div className={about["team-img"]}>
            <img
              src={Mariam}
              alt=""
              className="img-fluid rounded rounded-circle border border-dashed border-dark border-opacity-25"
            />
          </div>
          <div className="mt-4 pt-1">
            <NavLink className={about.name} to="#!">
              <h5 className={about.team}>مريم مصطفى</h5>
            </NavLink>
            <p className="text-muted mb-0">Account Executive</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
  )
}

export default About