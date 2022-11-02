import { useState } from 'react'
import './styles.css'

const Copos = () =>{
    const[medida, setMedida]=useState(null)
    const[mensagem, setMensagem] = useState ("")
    const[total,setTotal] = useState(0)

    const adicionarCopo=() =>{
        
        setTotal(prevState => prevState + parseInt(medida));

        setMensagem(`Você tomou ${total + parseInt(medida)} ml de água hoje!`)
        
    }
    const resetar= () => {
        setMensagem(`Você ainda não tomou água hoje!`)
        setTotal(0)    
    }
     
    return (
        <>
            <h1>Controle de quantidade de copos d'água</h1>
            <h2>Digite a quantidade ml do copo utilizado e selecione adicionar: </h2>
                      
            <input 
                type="number"
                placeholder='Insira a medida do seu copo em ml ' 
                value={medida}
                onChange= {e=>setMedida(e.target.value)}
            />
            <div className='botoes'>
                <button 
                    onClick={adicionarCopo}>Adicionar</button>
                <button 
                    onClick={resetar}>Resetar</button>
            </div>
            <h2>{mensagem}</h2>
        </>
    )
};

export default Copos;