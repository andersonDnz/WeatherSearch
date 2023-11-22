import { GiWindSlap } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { GiCompass } from "react-icons/gi";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { MdAir } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";

interface WeatherDetailsProps {
  data: {
    current: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      vis_km: number;
      feelslike_f: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const Details = ({ data }: { data: any }) => {
  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white">Detalhes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4">
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Velocidade do vento</h3>
            <h3>{data.current.wind_mph} km</h3>
          </div>
          <div>
            <GiWindSlap fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Umidade</h3>
            <h3>{data.current.humidity}%</h3>
          </div>
          <div>
            <WiHumidity fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Direção do vento</h3>
            <h3>{data.current.wind_dir}</h3>
          </div>
          <div>
            <GiCompass fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Nascer do sol</h3>
            <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
          </div>
          <div>
            <BsSunrise fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Pôr do sol</h3>
            <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
          </div>
          <div>
            <BsSunset fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Pressão do vento</h3>
            <h3>{data.current.pressure_mb}hPa</h3>
          </div>
          <div>
            <MdAir fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Visibilidade</h3>
            <h3>{data.current.vis_km}km</h3>
          </div>
          <div>
            <FaEye fontSize={40} />
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl ">
            <h3>Sensação</h3>
            <h3>{data.current.feelslike_f}°</h3>
          </div>
          <div>
            <CiTempHigh fontSize={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
