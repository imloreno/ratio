import { RadarChart } from "@components/Charts"
import ProfileStats from "@components/ProfileStats"
import style from "./myProfileStats.module.css"

const MyProfileStats = () => {
  return (
    <section>
        <ProfileStats>
          <ProfileStats.ProfilePicture />
          <ProfileStats.DataInformation />
        </ProfileStats>
        <div className={style.rate}>
          <RadarChart />
        </div>
    </section>
  )
}

export default MyProfileStats