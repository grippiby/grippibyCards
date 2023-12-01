import Skeleton from '@mui/material/Skeleton'

export const PersonalInfoSkeleton = () => {
  return (
    <>
      <Skeleton
        variant={'circular'}
        width={220}
        height={220}
        sx={{ marginTop: '27px', backgroundColor: 'rgb(105 105 105 / 50%)' }}
      />
      <Skeleton
        variant={'text'}
        width={'50%'}
        height={42}
        sx={{ marginTop: '10px', backgroundColor: 'rgb(105 105 105 / 50%)' }}
      />
      <Skeleton
        variant={'text'}
        width={'50%'}
        height={24}
        sx={{ backgroundColor: 'rgb(105 105 105 / 50%)' }}
      />
    </>
  )
}
