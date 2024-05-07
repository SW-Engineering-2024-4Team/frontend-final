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
            <CardHeader title='플레이어 이미지랑 이름이랑 입력 받으면 화면으로 그려주는 느낌.. 알죠......' />
            <CardContent>
                <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
                    
                </Typography>
            </CardContent>
            <CardActions className='card-action-dense'>
                <Button>Read More</Button>
            </CardActions>
        </Card>
    )
}

export default RoundCard