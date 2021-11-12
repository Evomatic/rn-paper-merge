import React from 'react'
import Card from '../Card'
import CardTitle from '../../CardTitle/CardTitle'
import CardAction from '../../CardActions/CardActions'
import CardCover from '../../CardCover/CardCover'
import CardContent from '../../CardContent/CardContent'
import Paragraph from '../../Paragraph/Paragraph'
import Button from '../../Button/Button'
import Title from '../../Title/Title'
import AvatarIcon from '../../AvatarIcon/AvatarIcon'


export default (
    <Card uxpId="test">
    {/* <CardTitle uxpId="test2" title="Card Title" subtitle="Card Subtitle" left={<AvatarIcon icon="folder" />} /> */}
    <CardContent uxpId="test3">
      <Title uxpId="tes4">Card title</Title>
      <Paragraph uxpId="test5">Card content</Paragraph>
    </CardContent>
    <CardCover uxpId="tes6t" source={{ uri: 'https://picsum.photos/700' }} />
    <CardAction uxpId="test7">
      <Button uxpId="tes8">Cancel</Button>
      <Button uxpId="test9">Ok</Button>
    </CardAction>
  </Card>
)