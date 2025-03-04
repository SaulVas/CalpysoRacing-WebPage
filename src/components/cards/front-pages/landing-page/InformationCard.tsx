// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Components Imports
import Perks from './Perks'

const InformationCard = ({ title }: { title: string }) => {
let imagePath = '/images/illustrations/unDraw/student.png'
let slogan = 'Enter Slogan Here'

if (title === 'Students') {
    imagePath = '/images/illustrations/unDraw/student.png'
    slogan = 'Ace your Exams with The Study Hub'
  } else if (title === 'Tutors') {
    imagePath = '/images/illustrations/unDraw/tutor.png'
    slogan = 'Knowledge Pays with The Study Hub'
  }

  return (
    <Card>
      <CardContent className='flex flex-col gap-4'>
        <div className='flex justify-center pli-2.5 pbs-4 rounded bg-primaryLight'>
          <img src={imagePath} className='bs-[146px]' />
        </div>
        <div>
          <Typography variant='h5' className='mbe-2'>
            {title}
          </Typography>
          <Typography variant='body2'>{slogan}</Typography>
        </div>
        <div className='flex flex-wrap justify-between gap-4'></div>
        <Perks title={title} />
      </CardContent>
    </Card>
  )
}

export default InformationCard
