import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey='cb6d72d7bd7841c473153a837c80fba82e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
   const [newsArticles, setNewsArticles] =useState([]);
    useEffect(() => {
       alanBtn({
         key:alanKey,
         onCommand:({command, articles}) => {
             if(command==='newHeadlines')
             {
                 setNewsArticles(articles);
             }
         }
       })
    }, [] )

    return(
       <div>
           <h1>News Application</h1>
            <NewsCards articles={newsArticles} />
       </div>
    );
}

export default App;