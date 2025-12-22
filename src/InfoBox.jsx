import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export default function InfoBox({ info }) {
  const IMG_URL = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

 
  return (
    <div className="infobox">
      <div className='cardbox'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={IMG_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.description.includes("thunder") ? <ThunderstormOutlinedIcon /> : info.description.includes("snow") ? <AcUnitOutlinedIcon /> : <WbSunnyOutlinedIcon />}
          
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
              <p>Tempraturer = {parseFloat(info.temperature).toFixed(2)}&deg;C</p>
              <p>Min Temprature = {parseFloat(info.temp_min).toFixed(2)}&deg;C</p>
              <p>Max Temprature = {parseFloat(info.temp_max).toFixed(2)}&deg;C</p>
              <p>The weather Feels Like = {parseFloat(info.feelslike).toFixed(2)}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Wind Speed = {parseFloat(info.windSpeed).toFixed(2)} km/h</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}