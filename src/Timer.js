import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

const cream = '#E6E3D3';
// const green = '#4aec8c';

function Timer(){
    return(
        
            
        <>
        <text className='app-title topleft'>
            Pomodoro.
        </text>
        
        
        <div>
                
                <CircularProgressbar strokeWidth={6} value={60} text={`60%`}  styles={buildStyles({ 
                    rotation: 15, 
                    strokeLinecap: 0,
                    textColor:'#fff', 
                    pathColor:cream, 
                    backgroundColor: 'rgba(255,255,255,.2)',
                    trailColor:'rgba(255,255,255,.2)',
                })} /> 
            
                <div style={{marginTop:'20px'}}>
                    <PlayButton />
                    <PauseButton />
                    
                </div>
    
                <div style={{marginTop:'20px'}}>
                    <SettingsButton/>
                </div>
                
            </div>
        </>
            
    );
        
}

export default Timer;