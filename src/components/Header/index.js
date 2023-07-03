
import logoThermas from '../../assets/images/logoThermas.png';
import {BsQuestionCircle} from 'react-icons/bs';

export default() => {
    return(
        <header className="flex justify-between px-[21px] py-5">
            <div className="logo">
                <a href="/"><img src={logoThermas} alt="" /></a>
            </div>
            <div class="mt-3">
                <a class="text-xl mr-12 font-body font-semibold" href="/">Home</a>
                <a class="text-xl mr-12 font-body font-semibold" href="/">Minha Conta</a>
                <a class="text-xl font-body font-semibold"href="/">Meus Pedidos</a>
            </div>
            <button class="group flex items-center border border-[orange] rounded-full hover:bg-[orange] ease-in duration-300">
                 <BsQuestionCircle className="w-11 h-11 px-2.5 plcursor-pointer text-[orange] group-hover:text-white ease-in duration-300"/>
                 <span class="font-body font-semibold text-[orange] pr-5 group-hover:text-white ease-in duration-300">Dúvidas</span>
            </button>
        </header>
    )
}