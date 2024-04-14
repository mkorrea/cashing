
function FixedSheet() {
    return(
        <div className="sheet">
            <table className="sheet-container">
                <tr className="sheet-row">
                    <input type="text" className="description" placeholder="Descrição" />
                    <select className="category">
                        <option> Contas </option>
                        <option> Comida </option>
                    </select>
                    <div className="date"> 05/04</div>
                    <div className="value negative"> - R$ 500,00 </div>
                </tr>
            </table>
        </div>
    )
}

export default FixedSheet;