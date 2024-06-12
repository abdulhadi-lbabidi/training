import './HookCardStyle.css'


function HookCard(props) {
  return (
    
        <>
          <p className='fs-3 my-3'>{props.title}</p>
          <p className='fs-5 p-2 my-3'>{props.text}</p>
          <code>{props.code}</code>
          <br />
        </>
    
  )
}

export default HookCard