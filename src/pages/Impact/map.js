import React, { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'
import { WLF_PURPLE } from '@/styles/Colors'
import { IconContext } from 'react-icons'
import { FaPlay } from 'react-icons/fa'
import {
  HorizontalToolBar,
  Slider,
  HeaderImage,
  MetaContainer,
  MediumContainer,
  Error,
  Popup,
  Box, 
  CheckboxContainer, 
  Item,
} from'./styles.js'

const Checkbox = ({ text, color, setValue, value }) => {
    const [filled, toggleFilled] = useState(false)

    const check = () => {
        if(!filled){
            setValue(true)
        } else {
            setValue(false)
        }
        toggleFilled(!filled)

    }

    return (
        <CheckboxContainer>
            <Box filled={filled} onClick={() => check()} color={color}/>
            <Item>{text}</Item>
        </CheckboxContainer>
      
    )
}


const TimelineSlider = ({ slotNames, slot, setSlot }) => {
  return (
    <>
      <Slider name='range' type="range" min="0" max={ slotNames.length - 1} 
              step="1" list='ticks' value={slot} 
              onChange={(e) => setSlot(e.value)} />
      <datalist id='ticks'>
        { slotNames.map((idx, v) => `<option value=${idx} label=${v}`) }
      </datalist>
    </>
  )
}

const AccumulativeCheckBox = ({ text, checked, setCheck }) => {
  return (
    <Checkbox 
      value={checked} 
      text={text} 
      color={WLF_PURPLE}
      setValue={setCheck} >
    </Checkbox>
  )
} 

const PlayButton = ({ icon, onPress }) => {
  return (
    <IconContext.Provider
      onclick={onPress}
      value={{
        color: WLF_PURPLE,
        style: {
          verticalAlign: 'middle',
          placement: 'center',
          marginRight: '10px',
          height: '50px',
        }
      }}
    >
      <div id="play-button"><FaPlay /></div>
      
      <div>Play</div>
    </IconContext.Provider>
  )
}

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "60vh",
    latitude: 40.67,
    longitude: -103.59,
    zoom: 3,
  })

  const slotNames = [
    "Wave 1",
    "Wave 2",
    "Wave 3",
    "Wave 4",
    "Wave 5",
  ]
  const [slot, setSlot] = useState(0) // wave 1 to 5
  const [accumulative, setAccumulative] = useState(true)
  const [animate, setAnimate] = useState(true)

  const icon = 'Icon placeholder'

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={"pk.eyJ1IjoibWFya2ludG9zaHoiLCJhIjoiY2tldWhuNXlsMDJmeTJycDVwMmN0dGQweSJ9._C1dShs1F6IQSzb0ME_xzw"}
      />

      <MediumContainer style={{ padding: "0px 25px 30px"  }}>
        <HorizontalToolBar>
          <TimelineSlider slotNames={slotNames} slot={slot} setSlot={setSlot} />
          <AccumulativeCheckBox text={"Accumulative"} checked={accumulative} 
                                setCheck={setAccumulative} />
          <PlayButton icon={icon} onPress={() => setAnimate(true)}/>
        </HorizontalToolBar>
      </MediumContainer>
    </>
  )
}

export default Map
