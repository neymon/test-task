import './app.css';
import add from './images/add.png';
import takePicture from './images/takePicture.png';
import share from './images/share.png';
import info from './images/info.png';
import refresh from './images/refresh.png';
import { useRef, useState } from 'react';
import Button from '@components/button';
import Popup from '@components/popup';
import LoadingIndicator from '@components/loading-indicator';
import { Camera, CameraType } from 'react-camera-pro';
import DowloadLink from '@components/dowload-link';


const App = () => {
  const camera = useRef<CameraType>( null );
  const [ step, setStep ] = useState( 0 );
  const [ canRefresh, setCanRefresh ] = useState( false );
  const [ showInfo, setShowInfo ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ photo, setPhoto ] = useState( '' );

  const addImageHandler = () => {
    setLoading( true );
    setTimeout( () => {
      setStep( step + 1 );
      setLoading( false );
      setIsLoaded( true );
    }, 5000 );
  };

  const takePictureHandler = () => {
    if ( camera && camera.current )
      setPhoto( camera.current.takePhoto() );

    setLoading( true );
    setTimeout( () => {
      setStep( step + 1 );
      setLoading( false );
      setIsLoaded( true );
      setCanRefresh( true );
    }, 5000 );
  };

  const refreshHandler = () => {
    setIsLoaded( false );
    setStep( 0 );
    setPhoto( '' );
    setCanRefresh( false );
  };

  const showInfoHandler = () => {
    setShowInfo( true );
  };

  return (
    <div className='wrapper'>
      <div className='camera-container'>
        { showInfo &&
          <Popup className='info-popup'>
            <div className='popup-content'>
              <p className='popup-text'>
                "This service does not collect or store any user metadata.
                <br />
                <br />
                We do not track or monitor user activity, nor do we collect any information about user behavior or preferences."
              </p>
              <Button
                className='close-popup-btn'
                onClick={ () => setShowInfo( false ) }
              >
                <p className='popup-btn-text'>GOT IT</p>
              </Button>
            </div>
          </Popup>
        }
        <div className='overlay-wrapper'>
          { !loading && !isLoaded
            && <>
              <div className='scan' />
              <p className='overlay-text'>“Who is this cutest kitty?”</p>
            </>
          }
          { loading && <LoadingIndicator /> }
        </div>
        { photo
          ? <img className='user-photo' src={ photo } alt='you' />
          : <Camera ref={ camera } aspectRatio='cover' errorMessages={ {} } />
        }
      </div>
      <div className='buttons-container'>
        <div className='add-btn-container'>
          <Button
            className='add-btn'
            disabled={ showInfo || step === 0 || loading }
            onClick={ addImageHandler }
          >
            <img src={ add } alt='add' />
          </Button>
        </div>
        <div className='button-with-step-container'>
          <p className='step'>{ step } / 3</p>
          { canRefresh
            ? <Button
              className='refresh-btn'
              disabled={ showInfo || loading }
              onClick={ refreshHandler }
            >
              <img src={ refresh } alt='refresh' />
            </Button>
            : <Button
              className='take-a-picture-btn'
              disabled={ showInfo || loading }
              onClick={ takePictureHandler }
            >
              <img src={ takePicture } alt='take' />
            </Button>
          }
        </div>
        <div className='buttons-group'>
          <Button
            className='share-btn'
            disabled={ showInfo || loading || step === 0 }
          >
            <DowloadLink href={ photo } >
              <img src={ share } alt='share' />
            </DowloadLink>
          </Button>
          <Button
            className='info-btn'
            disabled={ loading }
            onClick={ showInfoHandler }
          >
            <img src={ info } alt='info' />
          </Button>
        </div>
      </div>
    </div >
  );
};

export default App;
