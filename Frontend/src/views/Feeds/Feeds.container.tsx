import axios from "axios";
import React, { useEffect } from 'react'

import {
  baseFeedsURL
} from './Feeds.constants'
import FeedsComponent from "./Feeds.component";

const FeedsContainer: React.FC = () => {

  const [feeds, setFeeds] = React.useState([]);

  //Hook utilizado para o carregamento dos feed
  useEffect(() => {
    axios.get(baseFeedsURL).then((response) => {
      setFeeds(response.data);
    });
  }, []);

  return (
    <FeedsComponent feedData={feeds} />
  )
}

export default FeedsContainer