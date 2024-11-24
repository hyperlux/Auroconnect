import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = React.useState<WeatherData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      try {
        // For demo purposes, using mock data
        // In production, replace with actual API call
        const mockWeather: WeatherData = {
          temperature: 28,
          condition: 'Partly Cloudy',
          humidity: 65,
          windSpeed: 12,
          location: 'Auroville'
        };
        
        setWeather(mockWeather);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  if (!weather) return null;

  const getWeatherIcon = () => {
    switch (weather.condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-12 w-12 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="h-12 w-12 text-blue-500" />;
      case 'partly cloudy':
        return <Cloud className="h-12 w-12 text-gray-500" />;
      default:
        return <Sun className="h-12 w-12 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{weather.location}</h2>
          <p className="text-sm text-gray-500">Today's Weather</p>
        </div>
        {getWeatherIcon()}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-auroville-primary" />
          <div>
            <p className="text-2xl font-bold text-gray-900">{weather.temperature}°C</p>
            <p className="text-sm text-gray-500">{weather.condition}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Wind className="h-5 w-5 text-auroville-primary" />
          <div>
            <p className="text-2xl font-bold text-gray-900">{weather.windSpeed}</p>
            <p className="text-sm text-gray-500">km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}