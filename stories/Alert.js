

const Alert = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 2000;

  ${props => props.success && `
    color: green
  `}
`


const allTheThings = {
  warning: {
    color: yellow,
    content: '\e064'
  },
  danger: {
    color: ,
    content: 'bsfsj'
  },
  danger: {
    color: red,
    content: 'bsfsj'
  },
  danger: {
    color: red,
    content: 'bsfsj'
  }
}

const status = 'danger'
allTheThings.danger
allTheThings[status]

const Alert = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 2000;

  .life-alert__glyph::before {
    ${props => `
      color: ${allTheThings[props.status].color}
      content: ${allTheThings[props.status].content}
    `}
  }


  ${props => {
    const { color, content } = allTheThings[props.status]
    const foo = allTheThings[props.status].foo
    return `

    `
  }}

  ${props => props.success && `
    color: green
  `}
`

/*
import { colors, etc, media } from '../styles'

const alertTypes = {
  success: {
    color: $brand-success,
    content: '\e064'
  },
  warning: {
    color: $brand-warning,
    content: '\e101'
  },
  danger: {
    color: $brand-danger,
    content: '\e083'
  },
  info: {
    color: $brand-info,
    content: '\e086'
  }
}

const AlertWrapper = styled.div`
  position: fixed;
  top: ${p => (p.largeAlert ? '50%' : '50px')};
  right: ${p => (p.largeAlert ? 'auto' : '50px')};;
  z-index: 2000;
  width: ${p => (p.largeAlert ? '600px' : '400px')};
  padding: ${p => (p.largeAlert ? '27px 36px' : (${etc.padding-base-vertical} * 3) (${etc.padding-base-horizontal} * 2))};
  background: ${colors.white};
  box-shadow: ${etc.default-shadow};
  left: ${p => (p.largeAlert ? '50%' : '')};
  font-size: ${p => (p.largeAlert ? '21px' : '')};
  transform: ${p => (p.largeAlert ? 'translate(-50%, -50%)' : '')};

  .life-alert__glyph::before {
    ${props => `
      color: ${alertTypes[props.status].color}
      content: ${alertTypes[props.status].content}
    `}
  }

  .life-alert__icon {
    float: left;
    margin-right: ${etc.padding-base-horizontal} * 2;

    .life-alert__glyph {
      font-family: 'Glyphicons Halflings';
      font-size: 3.2em;
      font-style: normal;
      line-height: 1;
      color: ${colors.white};
    }
  }

  .life-alert__message {
    overflow: hidden;
  }

  .life-alert__title,
  .life-alert__subtitle {
    margin: 0 0 ${etc.padding-base-vertical};
  }

  .life-alert__subtitle {
    font-weight: 400;
    color: ${colors.gray-light};
  }

  .life-alert__actions {
    position: absolute;
    top: 5px;
    right: 12px;
  }

  .life-alert.life-alert--large-center {
    top: 50%;
    right: auto;
    left: 50%;
    width: 600px;
    padding: 27px 36px;
    font-size: 21px;
    transform: translate(-50%, -50%);

    & > .life-alert__icon {
      margin-right: 36px;

      & > .life-alert__glyph {
        font-size: 4em;
      }
    }
  }

  @media (min-width: ${media.screen-md}) {
    .life-alert.life-alert--large-center {
      left: 62.5%;
    }
  }
`
*/
