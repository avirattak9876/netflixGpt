 
import useNowPlaying from '../hooks/useNowPlaying'
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

function Browser() {
    
  useNowPlaying();

  return (
    <div>
     <Header />
     <Maincontainer />
     <Secondarycontainer />
    </div>
  )
}

export default Browser
