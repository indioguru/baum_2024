import { useState } from 'react';
import ArtistInfo from '../common/ArtistInfo';

const LineupFilter = ({ data }) => {
  const [daySelected, setDaySelected] = useState('Dia_1');

  const days = [
    { label: 'Día 1', value: 'Dia_1' },
    { label: 'Día 2', value: 'Dia_2' },
  ];
  const handleDayClick = (dayValue) => {
    setDaySelected(dayValue);
  };

  return (
    <div>
      <div className='flex justify-end gap-[10px] mt-[45px] lg:gap-[40px]'>
        {days.map((day) => (
          <div
            key={day.value}
            onClick={() => handleDayClick(day.value)}
            className={`text-[17px]  px-4 sharp hover:bg-black hover:text-green_two lg:text-[25px] lg:px-10 lg:py-1 ${
              day.value === daySelected ? ' bg-black text-green_two' : 'bg-red text-white '
            }`}
          >
            <button>{day.label}</button>
          </div>
        ))}
      </div>

      <ArtistInfo data={data[daySelected] ? data[daySelected] : []} />
    </div>
  );
};

export default LineupFilter;
