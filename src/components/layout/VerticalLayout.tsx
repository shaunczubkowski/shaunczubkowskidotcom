const VerticalLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col xl:mx-48 z-40 overflow-x-hidden">
            {props.children}
        </div>
    )
}

export default VerticalLayout;