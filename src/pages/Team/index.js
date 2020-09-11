import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { Colors, Typography } from '@/styles'
import * as Styles from './styles'

import BlenKedir from './headshot/blen-beharu-kedir.png'
import CarterMartindale from './headshot/carter-martindale.jpg'
import ChaseSouder from './headshot/chase-souder.JPG'
import DanielaShuman from './headshot/daniela-shuman.png'
import IrisSu from './headshot/iris-su.jpg'
import JeffreyYao from './headshot/jeffrey-yao.jpg'
import JonnyRogers from './headshot/jonny-rogers.jpg'
import KarlyHou from './headshot/karly-hou.JPG'
import KevinTan from './headshot/kevin-tan.jpg'
import NikkiSuzani from './headshot/nikki-suzani.JPG'
import RuhiMistry from './headshot/ruhi-mistry.JPG'
import SalmaKamni from './headshot/salma-kamni.jpeg'
import SandraChiu from './headshot/sandra-chiu.png'
import SimonTao from './headshot/simon-tao.jpg'
import SteveLi from './headshot/steve-li.jpg'
import YaelLivneh from './headshot/yael-livneh.jpg'
import JoshuaChen from './headshot/joshua-chen.png'
import AustinLi from './headshot/austin-li.png'
import MarkPekala from './headshot/mark-pekala.jpg'
import AlainDalma from './headshot/alain-saal-dalma.jpg'
import JanetLi from './headshot/janet-li.jpg'
import AmyShen from './headshot/amy-shen.jpg'
import LindaShen from './headshot/linda-shen.jpg'
import AndyHuynh from './headshot/andy-huynh.png'
import MelinaMuthuswamy from './headshot/melina-muthuswamy.jpg'
import JahnaviKalvala from './headshot/jahnavi-kalvala.jpg'
import MadisonAbbassi from './headshot/madison-abbassi.jpg'
import AllanLopez from './headshot/allan-lopez.png'
import CinnyLin from './headshot/cinny-lin.png'
import JillMagafas from './headshot/jill-magafas.jpg'
import LilyHuynh from './headshot/lily-huynh.JPG'
import AnnieLin from './headshot/annie-lin.jpg'
import VanessaYu from './headshot/vanessa-yu.jpg'
import BhavyaSharma from './headshot/bhavya-sharma.jpg'
import LaythAlkhani from './headshot/layth-alkhani.jpg'
import AnastasiaVelikovskaya from './headshot/anastasia-velikovskaya.jpg'
import MinjueWu from './headshot/minjue-wu.jpg'
import ShelbyTisdale from './headshot/shelby-tisdale.jpg'
import PatrickNie from './headshot/patrick-nie.jpg'
import HannahChew from './headshot/hannah-chew.png'
import DishaRamchandani from './headshot/disha-ramchandani.png'

const CHAIR = 'Chair'
const CO_DIRECTOR_LOGISTICS = 'Co-Director of Operations'
const ASSOC_DIRECTOR_LOGISTICS = 'Assc. Director of Operations'
const CO_DIRECTOR_GROWTH = 'Co-Director of Growth'
const ASSOC_DIRECTOR_GROWTH = 'Assc. Director of Growth'
const DIRECTOR_PR = 'Director of PR'
const ASSOC_DIRECTOR_PR = 'Assc. Director of PR'
const DIRECTOR_BUSINESS = 'Director of Business'
const CO_DIRECTOR_TECH = 'Co-Director of Tech'
const DIRECTOR_MEDIA_DESIGN = 'Director of Design'
const COMMUNITY_COORDINATOR = 'Community Coordinator'
const SEMINARS_LEAD = 'Engaged Seminars'
const CURRICULAR_LEAD = 'Curricular Support'
const SPECIAL_EVENTS_LEAD = 'Special Events'
const DATA_LEAD = 'Data'
const OUTREACH_LEAD_WEST = 'West Outreach'
const OUTREACH_LEAD_MIDWEST = 'Midwest Outreach'
const OUTREACH_LEAD_SOUTHEAST = 'Southeast Outreach'
const OUTREACH_LEAD_NORTHEAST = 'Northeast Outreach'
const OUTREACH_LEAD_INTERNATIONAL = 'International Outreach'
const SOCIAL_MEDIA_LEAD = 'Social Media'
const VIDEO_MEDIA_LEAD = 'Video Media'
const PRESS_CO_LEAD = 'Press and Written Media'
const SPONSORSHIPS_LEAD = 'Sponsorships'
const FUNDRAISING_LEAD = 'Fundraising'
const LEGAL_CO_LEAD = 'Legal'

const teamData = [
  {
    name: 'Karly Hou',
    school: 'Harvard ‘23',
    position: CHAIR,
    image: KarlyHou
  },
  {
    name: 'Amy Shen',
    school: 'UPenn ‘22',
    position: CO_DIRECTOR_LOGISTICS,
    image: AmyShen
  },
  {
    name: 'Kevin Tan',
    school: 'Harvard ‘23',
    position: CO_DIRECTOR_LOGISTICS,
    image: KevinTan
  },
  {
    name: 'Janet Li',
    school: 'Harvard ‘23',
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: JanetLi
  },
  {
    name: 'Alain Saal-Dalma',
    school: 'Carnegie Mellon ‘23',
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: AlainDalma
  },
  {
    name: 'Joshua Chen',
    school: 'UPenn ‘22',
    position: CO_DIRECTOR_GROWTH,
    image: JoshuaChen
  },
  {
    name: 'Austin Li',
    school: 'Harvard ‘23',
    position: CO_DIRECTOR_GROWTH,
    image: AustinLi
  },
  {
    name: 'Jahnavi Kalvala',
    school: 'University of Nottingham ‘24',
    position: ASSOC_DIRECTOR_GROWTH,
    image: JahnaviKalvala
  },
  {
    name: 'Melina Muthuswamy',
    school: 'UPenn ‘22',
    position: ASSOC_DIRECTOR_GROWTH,
    image: MelinaMuthuswamy
  },
  {
    name: 'Carter Martindale',
    school: 'Harvard ‘23',
    position: DIRECTOR_BUSINESS,
    image: CarterMartindale
  },
  {
    name: 'Nikki Suzani',
    school: 'Gunn HS ‘21',
    position: DIRECTOR_PR,
    image: NikkiSuzani
  },
  {
    name: 'Linda Shen',
    school: 'Jamesville DeWitt HS ‘21',
    position: ASSOC_DIRECTOR_PR,
    image: LindaShen
  },
  {
    name: 'Steve Li',
    school: 'Harvard ‘23',
    position: CO_DIRECTOR_TECH,
    image: SteveLi
  },
  {
    name: 'Jonny Rogers',
    school: 'Williams College ‘23',
    position: CO_DIRECTOR_TECH,
    image: JonnyRogers
  },
  {
    name: 'Daniela Shuman',
    school: 'Harvard ‘23',
    position: CO_DIRECTOR_TECH,
    image: DanielaShuman
  },
  {
    name: 'Sandra Chiu',
    school: 'Northwestern ‘23',
    position: DIRECTOR_MEDIA_DESIGN,
    image: SandraChiu
  }
]

const leadsData = [
  {
    name: 'Madison Abbassi',
    school: 'Palo Alto HS ‘22',
    position: SEMINARS_LEAD,
    image: MadisonAbbassi
  },
  {
    name: 'Allan Lopez',
    school: 'Stanford ‘23',
    position: CURRICULAR_LEAD,
    image: AllanLopez
  },
  {
    name: 'Simon Tao',
    school: 'Stanford ‘22',
    position: SPECIAL_EVENTS_LEAD,
    image: SimonTao
  },
  {
    name: 'Cinny Lin',
    school: 'NYU ‘22',
    position: DATA_LEAD,
    image: CinnyLin
  },
  {
    name: 'Hannah Chew',
    school: 'Harvard ‘23',
    position: OUTREACH_LEAD_WEST,
    image: HannahChew
  },
  {
    name: 'Jill Magafas',
    school: 'Amos Alonzo Stagg HS ‘21',
    position: OUTREACH_LEAD_MIDWEST,
    image: JillMagafas
  },
  {
    name: 'Shelby Tisdale',
    school: 'Mississippi School for Mathematics and Science ‘21',
    position: OUTREACH_LEAD_SOUTHEAST,
    image: ShelbyTisdale
  },
  {
    name: 'Anastasia Velikovskaya',
    school: 'Barnard ‘21',
    position: OUTREACH_LEAD_NORTHEAST,
    image: AnastasiaVelikovskaya
  },
  {
    name: 'Disha Ramchandani',
    school: 'UToronto ‘23',
    position: OUTREACH_LEAD_INTERNATIONAL,
    image: DishaRamchandani
  },
  {
    name: 'Annie Lin',
    school: 'UC Berkeley ‘24',
    position: PRESS_CO_LEAD,
    image: AnnieLin
  },
  {
    name: 'Patrick Nie',
    school: 'UMass Amherst ‘22',
    position: PRESS_CO_LEAD,
    image: PatrickNie
  },
  {
    name: 'Vanessa Yu',
    school: 'University of Toronto ‘24',
    position: SOCIAL_MEDIA_LEAD,
    image: VanessaYu
  },
  {
    name: 'Lily Huynh',
    school: 'Uplift Summit HS ‘21',
    position: VIDEO_MEDIA_LEAD,
    image: LilyHuynh
  },
  {
    name: 'Ruhi Mistry',
    school: 'UC Santa Cruz ‘24',
    position: FUNDRAISING_LEAD,
    image: RuhiMistry
  },
  {
    name: 'Minjue Wu',
    school: 'Harvard ‘22',
    position: SPONSORSHIPS_LEAD,
    image: MinjueWu
  },
  {
    name: 'Layth Alkani',
    school: 'Amos Alonzo Stagg HS ‘21',
    position: LEGAL_CO_LEAD,
    image: LaythAlkhani
  },
  {
    name: 'Bhavya Sharma',
    school: 'King’s College London ‘23',
    position: LEGAL_CO_LEAD,
    image: BhavyaSharma
  },
  {
    name: 'Andy Huynh',
    school: 'Stanford ‘23',
    position: COMMUNITY_COORDINATOR,
    image: AndyHuynh
  }
]

function getColor (position) {
  switch (position) {
    case CHAIR:
    case DIRECTOR_PR:
    case ASSOC_DIRECTOR_PR:
    case SPONSORSHIPS_LEAD:
    case FUNDRAISING_LEAD:
    case LEGAL_CO_LEAD:
      return Colors.WLF_PURPLE
    case CO_DIRECTOR_LOGISTICS:
    case ASSOC_DIRECTOR_LOGISTICS:
    case SEMINARS_LEAD:
    case CURRICULAR_LEAD:
    case SPECIAL_EVENTS_LEAD:
    case CO_DIRECTOR_TECH:
      return Colors.WLF_TURQOUISE
    case CO_DIRECTOR_GROWTH:
    case ASSOC_DIRECTOR_GROWTH:
    case DATA_LEAD:
    case OUTREACH_LEAD_WEST:
    case OUTREACH_LEAD_MIDWEST:
    case OUTREACH_LEAD_NORTHEAST:
    case OUTREACH_LEAD_SOUTHEAST:
    case OUTREACH_LEAD_INTERNATIONAL:
    case DIRECTOR_MEDIA_DESIGN:
      return Colors.WLF_YELLOW
    case DIRECTOR_BUSINESS:
    case SOCIAL_MEDIA_LEAD:
    case VIDEO_MEDIA_LEAD:
    case PRESS_CO_LEAD:
    case COMMUNITY_COORDINATOR:
      return Colors.WLF_ORANGE
    default:
      return Colors.WLF_TURQOUISE
  }
}

const PersonIcon = (person) => {
  if (person.name === 'blank') return <div />
  return (
    <Styles.PersonBackground>
      <Styles.PersonImage src={person.image} style={{ borderColor: getColor(person.position) }}/>
      <Typography.Name>{person.name}</Typography.Name>
      <Typography.School>{person.school}</Typography.School>
      <Typography.Position>{person.position}</Typography.Position>
    </Styles.PersonBackground>
  )
}

const Team = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar/>
      <div>
          <Typography.Header style={{color: Colors.WLF_PURPLE}}>Directors</Typography.Header>
      </div>
      <Styles.TeamRow>
        {teamData.map((person) => {
          return PersonIcon(person)
        })}
      </Styles.TeamRow>
      <div>
          <Typography.Header style={{color: Colors.WLF_PURPLE}}>Team Leads</Typography.Header>
      </div>
      <Styles.TeamRow>
        {leadsData.map((person) => {
          return PersonIcon(person)
        })}
      </Styles.TeamRow>
      <Footer />
    </div>
  )
}

export default Team
