const VerticalLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col mx-48">
            {props.children}
        </div>
    )
}

export default VerticalLayout;