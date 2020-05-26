import express from 'express';
import history from 'connect-history-api-fallback';
import path from 'path';
import fetch from 'node-fetch';

const app = express();

require('dotenv').config();

app.use(express.static('public'));
app.use(history());
app.use('/', express.static(path.join(__dirname, 'views')));

app.get('/search/:movie', function(req, res) {
  let movie = encodeURIComponent(req.params.movie);

  const getMovie = async () => {
    try {
      let result = await fetch(`https://openapi.naver.com/v1/search/movie.json?query=${movie}`, {
        headers: {
          'X-Naver-Client-Id': process.env.CLIENT_ID,
          'X-Naver-Client-Secret': process.env.CLIENT_SECRET
        }
      });

      let resultJson = await result.json();

      if (resultJson && resultJson.items) {
        res.status(200).json(resultJson);
      } else {
        res.status(500).json({
          errorMessage: '알 수 없는 요류가 발생했습니다.'
        });
      }
    } catch (err) {
      res.status(500).json({
        errorMessage: '알 수 없는 요류가 발생했습니다.'
      });
    }
  };
  getMovie();
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
