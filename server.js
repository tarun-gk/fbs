
constexpress = require('express');
constaxios = require('axios');

constapp = express();
constport = 3000;

app.use(express.static('public'));

app.get('/weather/:city', async (req, res) => {
  const{ city } = req.params;

  try {
    constapiKey = 'c97c0c1086d42990e89d64d76f50bb61';
    constresponse = awaitaxios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    consttemperature = response.data.main.temp;
    res.json({ temperature });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error:'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
