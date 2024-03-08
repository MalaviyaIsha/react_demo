export default function Clickevent() {
  let name = 'max'
  function alertOnClick(){
    name = "sofy"
    alert("Hello " + name)
  }
   return (
    <div>
      <h1>hello {name}</h1>
      <button onClick={alertOnClick}>Click Me</button><br></br>
       <button onClick={() => alert("Direct Alert")}>Click Me</button>
    </div>
  )
}