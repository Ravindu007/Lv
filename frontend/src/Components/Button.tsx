type Props = {
    name?:string
    onClick?:() => void; 
    dimensions?:number
    fontSize?: number;
    padding?:number
}

const LvButton = (props:Props) => {
    
 const buttonStyles = {
    width: props.dimensions ? `${props.dimensions}px` : '50px',
    height: props.dimensions ? `${props.dimensions}px` : '50px',
    fontSize: props.fontSize ? `${props.dimensions}px` : 'inherit',
    padding: props.padding ? `${props.padding}px` : '2px'
 }
  return (
    <div 
        className={`rounded-md bg-yellow-200 m-1 hover:cursor-pointer flex justify-center items-center`}
        onClick={props.onClick}
        style={buttonStyles}
    >
      {props.name}
    </div>
  )
}

export default LvButton
