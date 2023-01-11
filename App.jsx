import {Navbar, Welcome,Service,Loader,footer,Transactions} from './components' ;

const App = () => {
 

  return (
    <div className="min-h-scren">
     <div className='gradient-bg-welcome'>
       <Navbar/>
       <Welcome/>
      </div>
       <Service/>
       <Transactions/>
       <footer/>
    </div>
  )
}

export default App;
