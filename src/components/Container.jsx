/* eslint-disable react/prop-types */
function Container(props) {
    return (
      <div className={`lg:px-14 p-4	m-auto px-3 ${props.className}`}>{props.children}</div>
    )
  }
  
  export default Container