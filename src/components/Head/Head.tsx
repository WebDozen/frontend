// import React from 'react'
// import PropTypes from 'prop-types'
// import style from './Head.module.scss'
import { ArrowBackMIcon } from "@alfalab/icons-glyph/ArrowBackMIcon"
import { GenericWrapper } from "@alfalab/core-components/generic-wrapper"
import { Circle } from "@alfalab/core-components/icon-view/circle"
import { Gap } from "@alfalab/core-components/gap"
import { Typography } from "@alfalab/core-components/typography"
import { Link } from "react-router-dom"

import style from "./Head.module.scss"

const Head = () => {
  return (
    <GenericWrapper column={true} className={style.container}>
      <Link to="/" className={style.linkBack}>
        <Circle
          size={32}
          mainSize={24}
          children={<ArrowBackMIcon color="black" />}
        />
        <Gap size={"2xs"} direction="horizontal" />
        Кнопка
      </Link>
      <Gap size={"2xl"} />
      <Typography.Title font="styrene" view="large" tag="h1">
        Индивидуальный план развития
      </Typography.Title>
      <Gap size={"xl"} />
      <Gap size={"2xl"} />
      <Typography.TitleResponsive font="styrene" view="small" tag="h1">
        Главная страница
      </Typography.TitleResponsive>
    </GenericWrapper>
  )
}

Head.propTypes = {}

export default Head
