'use client'

// MUI Imports
import React from 'react'

import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import {
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  Timeline as MuiTimeline,
  type TimelineProps
} from '@mui/lab'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

import { perksData } from '@/data/front-pages/landingPageData'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    },
    marginBottom: -15 // Reduce margin between items
  },
  '& .MuiTimelineDot-root': {
    border: 0,
    padding: 0
  }
})

const generateTimelineItems = (title: string) => {
  const data = perksData()
  const perks = data.find(perk => perk.category === title)?.perks || []

  return perks.map((perk, index) => (
    <TimelineItem key={index}>
      <TimelineSeparator>
        <TimelineDot variant='outlined' className='mlb-0'>
          <i className='tabler-circle-check text-xl text-success' />
        </TimelineDot>
        {index < perks.length - 1 && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-5 pbe-2'>
        <Typography className='uppercase font-extrabold '>{perk}</Typography>
      </TimelineContent>
    </TimelineItem>
  ))
}

const Perks = ({ title }: { title: string }) => {
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // Memoize the button config to prevent recalculation
  const buttonConfig = React.useMemo(() => {
    switch (title) {
      case 'Students':
        return {
          text: 'Book Now',
          href: '/login',
          icon: 'tabler-book'
        }
      case 'Tutors':
        return {
          text: 'Teach Now',
          href: '/login',
          icon: 'tabler-school'
        }
      default:
        return {
          text: 'Get Started',
          href: '/login',
          icon: 'tabler-planet'
        }
    }
  }, [title])

  return (
    <CardContent>
      <Timeline>{generateTimelineItems(title)}</Timeline>
      <div className='flex justify-center mt-4'>
        <Button
          variant='contained'
          startIcon={<i className={`${buttonConfig.icon} text-2xl`} />}
          className='whitespace-nowrap text-lg py-2 md:py-3 px-4 md:px-6'
          href={buttonConfig.href}
          size={isBelowLgScreen ? 'medium' : 'large'}
          sx={{
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 0 0 0 rgba(145, 85, 253, 0.4)'
              },
              '70%': {
                boxShadow: '0 0 0 10px rgba(145, 85, 253, 0)'
              },
              '100%': {
                boxShadow: '0 0 0 0 rgba(145, 85, 253, 0)'
              }
            }
          }}
        >
          {buttonConfig.text}
        </Button>
      </div>
    </CardContent>
  )
}

export default React.memo(Perks)
