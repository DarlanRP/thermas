import React, {useState} from 'react';
import Calendar from 'react-calendar';
import ondas from '../../assets/images/bgOndas.png';

const ondasBg = {
    backgroundImage: `url(${ondas})`,
    backgroundSize: 'cover',
    width: '99.99%',
    height: '135vh',
    transform: 'translateY(6.3rem)',
}




// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date);
    }

    return(
        <div style={ondasBg} className="mt-[-12.6rem]">
            <div className="pt-40 grid gap-6 grid-cols-3 grid-rows-1">
                <div className='bg-[#74DCFF] rounded-3xl ml-8 w-[475px] h-[680px]'>
                    
                </div>

                <div className='bg-[#74DCFF] rounded-3xl ml-4 w-[475px] h-[680px]'>

                </div>

                <div className='bg-[#74DCFF] rounded-3xl w-[475px] h-[680px]'>

                </div>
            </div>
        </div>
    )
}