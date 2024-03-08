export default function Props(props) {
  return (
    <div style={{backgroundColor : "skyblue"}}>
      <h1> Name : {props.name} </h1>
      <h3>Email : {props.email}</h3>
      <h4>Address : {props.other.address}</h4>
    </div>
  )
}