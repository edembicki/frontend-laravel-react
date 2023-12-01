import { Button, Row } from 'react-bootstrap'
import './Feeds.scss'
import React, { useReducer } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader.component'
import avatar from './../../assets/images/avatar_default.svg'
import { baseFeedsURL, feedsCreateButton } from './Feeds.constants'
import FeedType from '../../components/FeedType/FeedType.component'
import DropDownComponent from '../../components/Dropdown/Dropdown.component'
import ModalComponent from '../../components/Modal/Modal.component'
import FeedsReducer, {
  initialState,
  setFeedTextIsLimited,
  setFeedModalShow,
  setFeedFormAuthor,
  setFeedFormText,
  setFeedFormType,
  setCurrentFeedData
} from './Feeds.reducer'
import axios from 'axios'
import { dateFormatConverter } from '../../helpers/date'

interface Props {
  feedData: any
}

interface Feed {
  id: string;
  author: string;
  text: string;
  type: string;
  updated_at: string;
}

const FeedsComponent: React.FC<Props> = ({ feedData }) => {
  //Redux utilizado para o gerenciamento do state
  const [state, dispatch] = useReducer(FeedsReducer, initialState)

  //Carregamento dos dados iniciais do state
  const {
    currentFeedData,
    textIsLimited,
    modalShow,
    feedFormAuthor,
    feedFormText,
    feedFormType
  } = state

  //Valida se o tamanho do texto excede 500 caracteres
  const handleTextSize = () => {
    dispatch(setFeedTextIsLimited(!textIsLimited))    
  }

  const handleReadMore = (feedText: any) => {
    if(feedText && feedText.length > 500) {
      return true    
    } 
    return false
  }

  //Funcao para gerenciar o state da modal - Mostra
  const handleModalShow = () => {
    dispatch(setFeedModalShow(true))
  }
  //Funcao para gerenciar o state da modal - Ocultar
  const handleModalHide = () => {
    dispatch(setFeedModalShow(false))
  }

  //Funcao chamada para criar post
  const handleModalCreateFeed = () => {
    if(feedFormAuthor){
      axios
        .post(baseFeedsURL, {
          author: feedFormAuthor,
          text: feedFormText,
          type: feedFormType
        })
        .then(() => {
          handleModalHide()
          window.location.reload()
        });
    }
  }

  //Funcao chamada para atualizar post
  const handleModalUpdateFeed = (currentFeedData: { id: string }) => {
    if(feedFormAuthor){
      axios
        .put(baseFeedsURL+'/'+currentFeedData.id, {
          author: feedFormAuthor,
          text: feedFormText,
          type: feedFormType
        })
        .then(() => {
          handleModalHide()
          window.location.reload()
        });
    }
  }

  //Funcao para atribuir os dados do post selecionado para dentro da modal
  const handleModalEdit = (currentFeed: Feed) => {
    dispatch(setFeedModalShow(true))
    dispatch(setCurrentFeedData(currentFeed))
  }

  //Funcao chamada para deletar um post
  const handleModalDelete = async (currentFeed: Feed) => {
    const userConfirmed = window.confirm('Você tem certeza?');
    if (userConfirmed) {
      axios
        .delete(baseFeedsURL + '/' + currentFeed.id)
        .then(() => {
          handleModalHide();
          window.location.reload();
        });
    }
  }

  return (
    <div className='Feeds__Wrapper'>
      <PageHeader />
      <div className='Feeds__Content'>
        <Row className='Feeds__Actions__Row'>  
          <Button onClick={handleModalShow}>{feedsCreateButton}</Button>
        </Row>
        <div className='Feeds'>    
          {
            feedData?.data?.data.map((feed: Feed) => {
              const bodyText = textIsLimited ? feed?.text : feed?.text?.slice(0, 500);
              return (
                <div className='Feeds__Item' key={feed.id}>
                  <div className='Feeds__Item__Header'>              
                    <div className='Feeds__Item__Header__Left'>
                      <img alt='' src={avatar} />
                      <div>
                        <p className='Feeds__Item__PublishedBy'>{feed.author}</p>
                        <p className='Feeds__Item__PublishedDate'>Publicado em {dateFormatConverter(feed.updated_at)}</p>
                      </div>
                    </div>
                    <DropDownComponent 
                      onEditClick={() => handleModalEdit(feed)} 
                      onDeleteClick={() => handleModalDelete(feed)} 
                    />
                  </div>
                  <div className='Feeds__Item__Actions'>
                    <FeedType type={feed.type?.toLowerCase()}/>
                  </div>  
                  <div className='Feeds__Item__Content'>
                    <div dangerouslySetInnerHTML={{ __html: bodyText }} />
                    {handleReadMore(feed.text) && <p className='Feeds__Item__Content__ReadMore' onClick={() => handleTextSize()}>Leia mais...</p> }
                  </div>  
                </div>
              )
            })
          }             
          
        </div>
      </div>
      {
        modalShow && 
        <ModalComponent 
          onHide={handleModalHide} 
          onSuccess={currentFeedData ? () => handleModalUpdateFeed(currentFeedData) : handleModalCreateFeed}
          currentFeedData={currentFeedData}
          reducer={
            {
              feedFormText,
              setFeedFormAuthor, 
              setFeedFormType,
              setFeedFormText,
              dispatch
            }
          }
        />
      }      
    </div>
  )
}

export default FeedsComponent
