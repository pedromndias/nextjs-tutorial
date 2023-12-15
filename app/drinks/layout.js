// ? Note how we can also create a layout.js inside drinks folder in order to create nested layouts. This layout will apply only to this segment (drinks). We need to get the children as parameter so what we return is shared in this segment.

const DrinksLayout = ({children}) => {
  return (
    <div className="max-w-xl">
        {/* with daisyUI we can get mock up code: */}
        <div className="mockup-code mb-8">
            <pre data-prefix="$">
                <code>nps create-next-app@latest nextjs-tutorial</code>
            </pre>
        </div>
        {children}
    </div>
  )
}

export default DrinksLayout