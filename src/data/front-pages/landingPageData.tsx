// Type Imports
import type { PerksDataType } from '@/types/perksTypes'
import type { FaqData } from '@/types/faqTypes'

const perksData = (): PerksDataType[] => [
  {
    category: 'Students',
    perks: [
      'Course-specific',
      'Expert tutors',
      'Flexible scheduling',
      'Affordable rates',
      'Reviews'
    ]
  },
  {
    category: 'Tutors',
    perks: [
      'Set own rates',
      'Flexible availability',
      'Integrated payments',
      'Offer group sessions',
      'Group chats'
    ]
  }
]

const faqsDataStudent: FaqData[] = [
  {
    id: 'panel1',
    question: 'How do I find a tutor on TheStudyHub.nl?',
    active: false,
    answer:
      'You can search for tutors by entering your course name, university, and other relevant details. The platform will display a list of available tutors matching your criteria.'
  },
  {
    id: 'panel2',
    question: 'How do I book a session with a tutor?',
    answer:
      'Once you find a tutor that fits your needs, you can view their availability and book a session directly through their profile page. You will receive a confirmation email with the session details.'
  },
  {
    id: 'panel3',
    question: 'What is The Study Hub?',
    answer:
      'The Study Hub is a platform that connects students with tutors for personalized tutoring sessions. The platform focuses on specific courses at secondary high school and university level, offering tailored support to help students succeed academically. Whether you need help with a particular subject or preparation for exams, The Study Hub provides access to qualified tutors who can meet your educational needs.'
  },
  {
    id: 'panel4',
    question: 'How much do tutoring sessions cost?',
    answer:
      "The cost of sessions varies depending on the tutor's experience, subject, and length of the session. Pricing information is available on each tutor's profile."
  },
  {
    id: 'panel5',
    question: 'Can I rate and review my tutor after a session?',
    answer:
      'Yes, after your session, you can leave a rating and review for your tutor. This helps other students make informed decisions and provides feedback for the tutors.'
  }
]

const faqsDataTutor: FaqData[] = [
  {
    id: 'panel1',
    question: 'How do I become a tutor on TheStudyHub.nl?',
    active: false,
    answer:
      'To become a tutor, you need to create an account and complete the tutor registration process. This includes providing your grade transcript, teaching experience, and the subjects you wish to tutor.'
  },
  {
    id: 'panel2',
    question: 'How do I set my availability and rates?',
    answer:
      'You can set your availability and hourly rates through your account dashboard and through the create a session features that are visible throughout the platform. You can update these sessions at any time.'
  },
  {
    id: 'panel3',
    question: 'How do I receive payments for my tutoring sessions?',
    answer:
      "Payments are processed through The Study Hub platform. After a session is completed, the payment will be transferred to your account according to the platform's payout schedule."
  },
  {
    id: 'panel4',
    question: 'What should I do if a student cancels a session?',
    answer: 'If a student cancels a session they may be eligible for a refund as outlined in our terms of service.'
  },
  {
    id: 'panel5',
    question: 'Can I offer group tutoring sessions?',
    answer:
      'Yes, you can offer both one-on-one and group tutoring sessions. You can set the maximum number of students for group sessions and adjust the pricing accordingly.'
  }
]

export { perksData, faqsDataStudent, faqsDataTutor }
