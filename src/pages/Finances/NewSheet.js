import React, { useState } from 'react'
import FixedSheet from "./FixedSheet";

function NewSheet() {
    const [ sheets, setSheets ] = useState([])
    function addSheet() {
        setSheets([...sheets, <FixedSheet key={sheets.length} />]);
    }

    return (
        <div className="sheets-container"> {/* Adicionando a classe CSS para o contêiner das planilhas */}
        
            <div className="sheets-list"> {/* Adicionando a classe CSS para a lista de planilhas */}
                {sheets.map((sheet, index) => <div key={index}>{sheet}</div>)}
            <button type="button" className="add-button" onClick={addSheet}>
                <p className='text-add'>+</p>
                <p className='text-add-sheet'> Adicionar Planilha </p>
            </button>
            </div>
        </div>
    );
}

export default NewSheet;