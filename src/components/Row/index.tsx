interface RowProps {
    children: React.ReactNode
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch"
    alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch"
}

const Row = ({ children, justifyContent = 'flex-start', alignItems = 'center' }: RowProps) => {
    return (
        <div style={{ width: "100%", display: 'flex', justifyContent, alignItems }}>
            {children}
        </div>
    )
}

export default Row;