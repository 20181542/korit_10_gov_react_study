
function App() {
  
    new Promise ((resolve, reject) => {
        resolve();
    }).then(() => {
        setTimeout(() => {
            console.log("안녕하세요")
        }, 1000);
    })
  
   return (
        <>
           
        </>
    )
}

export default App;