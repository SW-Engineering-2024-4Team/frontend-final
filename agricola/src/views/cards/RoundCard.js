import React from 'react';

// MUI 불러오기
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const RoundCard = () => {
    return (
        <Card>
            <CardHeader title='라운드 카드 입니다.' />
            <CardContent>
                <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
                    사진을 넣을 예정이고, 카드 자체가 클릭되는 건 지윤님
                </Typography>
            </CardContent>
            <CardActions className='card-action-dense'>
                <Button>Read More</Button>
            </CardActions>
        </Card>
    )
}

export default RoundCard