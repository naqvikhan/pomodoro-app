import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer(){
    return(
        <div>
            <CircularProgressbar strokeWidth={10} value={60} text={`60%`} styles={buildStyles({
            strokeLinecap: 15, 
            rotation: 270,
            textColor:'#fff', 
            pathColor:red, 
            tailColor:'rgba(255,255,255,.2)',
            })} /> 
        
            <div style={{marginTop:'20px'}}>
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton/>
            </div>
            
        </div>
    );
        
}

export default Timer;