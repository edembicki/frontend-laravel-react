import React from 'react'
import { Article, Post, Group } from '../icons'
import './FeedType.scss'

interface Props {
  type: string
}

const FeedType: React.FC<Props> = ({type}) => {
  const feedTypeLabels: Record<string, string> = {
    artigo: 'Artigo Jurídico',
    post: 'Post',
    grupo: 'Grupo',
  };
  const FEED_TYPES: { [key: string]: JSX.Element } = {
    artigo: <Article />,
    post: <Post />,
    grupo: <Group />,
  };
  const InputComponent: any = FEED_TYPES[type]

  if (InputComponent) {
    return <div className='FeedType'>
      {InputComponent}
      {feedTypeLabels[type]}
    </div>; 
  }

  return null;
}

export default FeedType
