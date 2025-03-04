// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import styles from './styles.module.css'

// Data
const team = [
  {
    name: 'Sebastian D. Kissaun',
    position: 'Co-Founder, Business Development',
    image: '/images/front-pages/landing-page/team/seb.png',
    color: 'var(--mui-palette-error-mainOpacity)'
  },
  {
    name: 'Alexandre Martens',
    position: 'Co-Founder, Full Stack Developer',
    image: '/images/front-pages/landing-page/team/alex.png',
    color: 'var(--mui-palette-primary-mainOpacity)'
  },
  {
    name: 'Saul Vassallo',
    position: 'Co-Founder, Frontend Developer',
    image: '/images/front-pages/landing-page/team/saul.png',
    color: 'var(--mui-palette-success-mainOpacity)'
  }
]

const Card = styled(MuiCard)`
  border-color: ${(props: { color: ThemeColor }) => props.color};
  border-start-start-radius: 90px;
  border-start-end-radius: 25px;
`

const OurTeam = () => {
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
    <section id='team' className='plb-[50px] bg-backgroundPaper' ref={ref}>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <Chip size='small' variant='tonal' color='primary' label='Our Great Team' />
          <div className='flex flex-col items-center gap-y-1 justify-center flex-wrap'>
            <div className='flex items-center gap-x-2'>
              <Typography color='text.primary' variant='h4' className='text-center'>
                <span className='relative z-[1] font-extrabold'>
                  Supported
                  <img
                    src='/images/front-pages/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[19%] block-start-[17px]'
                  />
                </span>{' '}
                by Student Entrepreneurs
              </Typography>
            </div>
            <Typography className='text-center'>Who is behind this project?</Typography>
          </div>
        </div>
        <Grid
          container
          rowSpacing={12}
          columnSpacing={6}
          className='pbs-[50px]'
          justifyContent='center'
          alignItems='center'
        >
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card
                className='shadow-none border bg-backgroundDefault relative overflow-visible max-w-[300px] mx-auto'
                color={member.color as ThemeColor}
              >
                <CardContent className='flex flex-col items-center justify-center p-0'>
                  <div
                    className={classnames(
                      'flex justify-center is-full mli-auto text-center bs-[120px] relative overflow-visible',
                      styles.teamCard
                    )}
                    style={{ backgroundColor: member.color }}
                  >
                    <img src={member.image} alt={member.name} className='bs-[160px] absolute block-start-[-30px]' />
                  </div>
                  <div className='flex flex-col gap-2 p-4 is-full'>
                    <div className='text-center'>
                      <Typography variant='h6'>{member.name}</Typography>
                      <Typography variant='body2' color='text.disabled'>
                        {member.position}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default OurTeam
