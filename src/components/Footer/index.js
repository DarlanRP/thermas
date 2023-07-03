import React from 'react';
import bgFooter from '../../assets/images/bgFooter.png';
import SCROLLUP from '../../assets/images/SCROLLUP.svg';
import location from '../../assets/images/location.svg';
import logoFooter from '../../assets/images/logoFooter.png';
import call from '../../assets/images/call.svg';
import mail from '../../assets/images/mail.svg';
import brow from '../../assets/images/brow.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import youtube from '../../assets/images/youtube.svg';
import masterCardLogo from '../../assets/images/MasterCardLogo.svg';
import visaLogo from '../../assets/images/visaLogo.svg';
import eloLogo from '../../assets/images/eloLogo.svg';
import pixLogo from '../../assets/images/pixLogo.svg';
import hiperCard from '../../assets/images/Hipercard.svg';
import americanLogo from '../../assets/images/AmericanLogo.svg';


const bgf = {
    backgroundImage: `url(${bgFooter})`,
    backgroundSize: 'cover',
    width: '99.99%',
    height: '100vh',
    
    
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <div style={bgf} className='pt-24'>

            <div className='flex justify-center'>
                <img src={SCROLLUP} alt="" />
            </div>

            <div class=" mt-10 grid gap-4 grid-cols-4 grid-rows-1">

                <div className='ml-24'>
                    <div>
                    <img src={logoFooter} alt="" /> 
                    </div>

                    <div className='flex pt-7'>
                        <img className='mr-5 w-6' src={location} alt="" />
                        <p className='text-white'>Av. do folclore, 1543 - Jardim Santa <br /> Efigênia, Olímpia - SP, 15405-014</p>
                    </div>

                    <div className='flex flex-wrap pt-7'>
                        <img className='mr-5 w-6' src={call} alt="" />
                        <p className='text-white'>17 3279 - 3500</p>
                    </div>

                    <div className='flex flex-wrap pt-7'>
                        <img className='mr-5 w-6' src={mail} alt="" />
                        <p className='text-white'>termas@termas.com.br</p>
                    </div>

                    <div className='flex flex-wrap pt-7'>
                        <img className='mr-5 w-6' src={brow} alt="" />
                        <p className='text-white'>www.thermas.com.br</p>
                    </div>


                </div>

                <div>
                    <div>
                    <h2 class="flex justify-center text-2xl font-body font-semibold text-white pb-6">Rede Sociais</h2>
                    </div>

                    <div className='flex justify-center pt-7'>
                        <img className='mr-5 w-6' src={twitter} alt="" />
                        <p className='text-white '>Twitter</p>
                    </div>

                    <div className='flex justify-center pt-9'>
                        <img className='mr-5 w-6' src={facebook} alt="" />
                        <p className='text-white'>Facebook</p>
                    </div>

                    <div className='flex justify-center pt-9 pl-2'>
                        <img className='mr-5 w-6' src={instagram} alt="" />
                        <p className='text-white'>Instagram</p>
                    </div>

                    <div className='flex justify-center pt-10'>
                        <img className='mr-5 w-6' src={youtube} alt="" />
                        <p className='text-white'>YouTube</p>
                    </div>


                </div>

                <div>
                    <div>
                    <h2 class=" text-2xl font-body font-semibold text-white pb-6">Institucional</h2>
                    </div>

                    <div className='pt-7'>
                        <p className='text-white '>Política de compra no cartão</p>
                    </div>

                    <div className='pt-9'>
                        <p className='text-white'>Política de cancelamento</p>
                    </div>

                    <div className='pt-9'>
                        <p className='text-white'>Política de compra</p>
                    </div>

                    <div className='pt-10'>
                        <p className='text-white'>Dúvidas</p>
                    </div>

                </div>

                <div>
                    <div>
                    <h2 class=" text-2xl font-body font-semibold text-white pb-6">Formas de pagamento</h2>
                    </div>

                    <div className='flex pt-7'>
                        <img className='pr-4' src={masterCardLogo} alt="" />
                        <img className='pr-4' src={visaLogo} alt="" />
                        <img className='pr-4' src={eloLogo} alt="" />
                        <img className='pr-4' src={americanLogo} alt="" />
                        <img src={hiperCard} alt="" />
                    </div>

                    <div className='pt-9'>
                        <p className='text-white'>Em até 3 vezes nos cartões de crédito.</p>
                    </div>

                    <div className='pt-9'>
                    <img src={pixLogo} alt="" />
                    </div>
                </div>
            </div>
                <div className='flex flex-col pt-16'>
                    <p className='text-white flex justify-center'>Este site é protegido pelo reCAPTCHA e a <a target='_blank' href="https://policies.google.com/privacy">. Política de Privacidade</a> e os Termos de Serviço do Google se aplicam.</p>
                    <p className='text-white flex justify-center'>Todos os direitos reservados. Desenvolvido por PWI</p>
                </div>
        </div>
    )
}