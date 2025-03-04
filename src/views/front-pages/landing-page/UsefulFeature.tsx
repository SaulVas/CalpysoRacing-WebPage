// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

import styles from './styles.module.css'

// SVG Imports
import Paper from '@assets/svg/front-pages/landing-page/Paper'
import Check from '@assets/svg/front-pages/landing-page/Check'
import User from '@assets/svg/front-pages/landing-page/User'
import Rocket from '@assets/svg/front-pages/landing-page/Rocket'
import Bulb from '@/assets/svg/front-pages/help-center/Bulb'
import Document from '@assets/svg/front-pages/landing-page/Document'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Data
const feature = [
  {
    icon: <Check color='var(--mui-palette-success-main)' />,
    title: 'Expert Tutors',
    description: 'Connect with highly qualified tutors who are experts in their respective fields.'
  },
  {
    icon: <Document color='var(--mui-palette-primary-main)' />,
    title: 'Personalized Learning Plans',
    description: 'Receive customized learning plans tailored to your individual academic needs and goals.'
  },
  {
    icon: <Paper color='var(--mui-palette-secondary-main)' />,
    title: 'Flexible Scheduling',
    description: 'Schedule sessions at your convenience with flexible booking options.'
  },
  {
    icon: <Bulb color='var(--mui-palette-warning-main)' />,
    title: 'Comprehensive Resources',
    description: 'Access a wide range of educational resources and materials to support your learning.'
  },
  {
    icon: <User color='var(--mui-palette-info-main)' />,
    title: 'Interactive Sessions',
    description: 'Engage in interactive, real-time tutoring sessions for a more effective learning experience.'
  },
  {
    icon: <Rocket color='var(--mui-palette-error-main)' />,
    title: 'Continuous Support',
    description: 'Benefit from continuous support and guidance throughout your learning journey.'
  }
]

const UsefulFeature = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLDivElement>(null)

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    ref.current && observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      id='features'
      ref={ref}
      className={classnames('plb-[20px] bg-backgroundDefault rounded-[25px]', styles.sectionStartRadius)}
    >
      <div className={classnames('flex flex-col gap-12 pbs-12 pbe-[60px]', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <Chip size='small' variant='tonal' color='primary' label='Useful Feature' />
          <div className='flex flex-col items-center gap-y-1 justify-center flex-wrap'>
            <div className='flex items-center gap-x-2'>
              <Typography color='text.primary' variant='h4' className='text-center'>
                <span className='relative z-[1] font-extrabold'>
                  Everything you need
                  <img
                    src='/images/front-pages/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[13%] sm:inline-start-[-19%] block-start-[17px]'
                  />
                </span>{' '}
                to excel in your studies
              </Typography>
            </div>
            <Typography className='text-center'>
              Not just tutoring sessions, the platform includes personalized learning plans and continuous support.
            </Typography>
          </div>
        </div>
        <div>
          <Grid container spacing={6}>
            {feature.map((item, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  {item.icon}
                  <Typography className='mbs-2' variant='h5'>
                    {item.title}
                  </Typography>
                  <Typography className='max-is-[364px] text-center'>{item.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default UsefulFeature
