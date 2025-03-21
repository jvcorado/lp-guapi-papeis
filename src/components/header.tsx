export default function Header() {
    return(
        <div className="flex flex-1 w-full bg-green-700 h-35">
        <div className="flex flex-1 w-full h-20 border-b-1 border-green-300">
            <div className="flex items-center justify-center w-full">    
                <img 
                    className="w-[10vw] h-[5vh]"
                    src="../LOGO_GUAPI.png" 
                    alt="Logo da Empresa" 
                    height={10} 
                    width={70}
                />
                <input 
                    className="ml-4 p-2 border border-gray-300 rounded-lg" 
                    type="text" 
                    placeholder="Digite algo..."
                />

                <p>Acesso ao portal</p>

            </div>
        </div>
    </div>
    )
}