import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'

const NewsBoard = ({}) => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let apiKey = import.meta.env.VITE_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
    },[])



  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'> News</span></h2>
        {articles.map((news,index)=>{
            return <Newsitem key={index} title={news.title} description = {news.description} src={news.urlToImage} url={news.url}/>
        })}

        
    </div>
  )
}

export default NewsBoard