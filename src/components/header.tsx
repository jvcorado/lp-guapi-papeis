import { ChevronDown, Menu, Search } from "lucide-react"

export default function Header() {
    return (
        <div className="flex flex-1 flex-col w-full h-35" style={{ backgroundColor: 'rgba(0, 126, 68, 0.9)' }}>
            <div className="flex flex-1 w-full h-20 border-b-1 border-[#007E44]">
                <div className="flex items-center justify-between w-full mx-8">
                    <img
                        className="w-[10vw] h-[5vh] md:w-[25vw] lg:w-[10vw]"
                        src="../LOGO_GUAPI.png"
                        alt="Logo da Empresa"
                        height={10}
                        width={70}
                    />
                    <div className="relative flex items-center w-full sm:w-80 md:60">
                        <input
                            className="ml-4 p-2 text-[#fff] border-2 border-gray-300 rounded-lg w-full sm:w-80 md:60 pr-10"
                            type="text"
                            placeholder="Pesquisar"
                        />
                        <Search className="absolute right-4 text-[#fff] cursor-pointer" />
                    </div>



                    {/* Exibe "Acesso ao portal" apenas em telas grandes (lg) */}
                    <div className="hidden lg:flex flex-row-reverse">
                        <ChevronDown className="text-[#fff]" />
                        <p className="text-[#fff]">Acesso ao portal</p>
                    </div>

                    {/* Exibe o componente <Menu /> apenas em telas médias (md) ou pequenas (sm) */}
                    <div className="lg:hidden">
                        <Menu  className="h-10 w-10 text-[#fff]"/>
                    </div>

                </div>
            </div>



            <div className="hidden lg:flex flex-row flex-1 justify-evenly items-center">

                <div className="flex flex-row-reverse">
                    <ChevronDown className="text-[#fff]" />
                    <p className="text-[#fff]">A empresa</p>
                </div>

                <div className="flex flex-row-reverse">
                    <ChevronDown className="text-[#fff]" />
                    <p className="text-[#fff]">Linha de produtos</p>
                </div>

                <div className="flex flex-row-reverse">
                    <ChevronDown className="text-[#fff]" />
                    <p className="text-[#fff]">Sustentabilidade e Tecnologia</p>
                </div>

                <div className="flex flex-row-reverse">
                    <ChevronDown className="text-[#fff]" />
                    <p className="text-[#fff]">Responsabilidade Social</p>
                </div>

                <div className="flex flex-row-reverse">
                    <ChevronDown className="text-[#fff]" />
                    <p className="text-[#fff]">Blog</p>
                </div>

                <div className="flex flex-row-reverse">
                    <ChevronDown className="text-[#fff]" />
                    <p className="text-[#fff]">Trabalhe Conosco</p>
                </div>

                <div className="flex flex-row-reverse">
                    <ChevronDown className="text-[#fff]" />
                    <p className="text-[#fff]">Contato</p>
                </div>

            </div>


        </div>
    )
}