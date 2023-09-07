import FarmarHederStyle from './FarmHeader.module.css';

export default function FarmHeader({Data}) {
  return (
    <>
      <section className={FarmarHederStyle.userprofile}>
            <div className={"container"}>
                <div className={FarmarHederStyle.user_header_section}>
                  <div className={FarmarHederStyle.profile_pic}>
                      <img className={FarmarHederStyle.imagepro}src={`http://localhost:3500/${Data?.img}`} alt=""/>
                  </div>
                </div>
            </div>
      </section>
    </>
  )
}
