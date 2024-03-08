const Nestedcomponent = () => {
  function Student() {
    return (
      <h3>
        Student Here...
      </h3>
    )
  }
  return (
    <div>
      <h1>
        School Here...
      </h1>
      <Student />
    </div>

  )
}
export default Nestedcomponent;