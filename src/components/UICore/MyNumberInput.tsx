type Props = React.ComponentProps<'input'> & {
  label?: string
  val: number | null
  onSet: (val: number | null) => void
}

export const MyNumberInput = (props: Props) => {
  return (
    <label>
      {props.label}
      <div>
        <input
          {...props}
          type='number'
          value={props.val?.toString() ?? ''}
          onChange={e => {
            const inputValue = e.target.value
            if (inputValue === '') {
              props.onSet(null)
            } else {
              props.onSet(parseFloat(inputValue))
            }
          }}
        />
      </div>
    </label>
  )
}
