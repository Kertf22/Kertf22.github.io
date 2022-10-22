interface ColumnProps {
    children: React.ReactNode
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch"
    alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch"
}

const Column = ({ children, justifyContent = 'flex-start', alignItems = 'flex-start' }: ColumnProps) => {
    return (
        <div style={{ width: "100%", display: 'flex', flexDirection: "column", justifyContent, alignItems }}>
            {children}
        </div>
    )
}

export default Column;