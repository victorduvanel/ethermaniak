import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl white-glassmorphism p-3 mt-5 mb-5 hover:shadow-xl">
    <div className="flex place-content-center"> 
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    </div>
    <div className="ml-0 flex flex-col flex-1">
      <h3 className="mt-2 text-center text-white text-lg">{title}</h3>
      <p className="mt-1 text-center text-white text-sm md:w-12/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="mx-auto flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start max-w-[85%]">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Nous améliorons nos 
          <br />
          services en continue
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Notre plateforme ne prend aucun frais lors de vos transactions. Cela ne nous empêche
          pas d'améliorer notre service en continue. Merci pour vos dons ! 
          <a className="font-bold text-xs"> 0x1982AEfC88D448DD27fbE2aF92f67dE59B4b0081</a>
        </p>
      </div>

      <div className="flex-1 flex-col justify-center items-center max-w-[85%]">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Vitesse et Sécurité"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Vos transactions sont sécurisées par le protocole ERC20 et nous travaillons d'arrache pied pour maintenir un niveau maximal. Nous ne prenons pas de frais mais comme nous le savons, chaque échange sur la blockchain nécessite un minage qui a un coût. Nous recherchons automatiquement le meilleur coût pour vos transactions. Le minage est une opération technique qui permet l'authentification et l'enregistrement de votre transaction. Cela peut prendre quelques secondes comme quelques heures. Nous recherchons automatiquement les possibilités les plus avantageuses."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Comment ça fonctionne ?"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Pour utiliser notre plateforme vous n'avez pas besoin de créer un compte. Il vous faut un numéro de porte-feuille électronique appelé wallet ainsi que l'extension Metamask installée sur votre navigateur. Vous pouvez ensuite le connecter à l'aide du bouton 'Connecter son Wallet'. Vous pourrez ainsi envoyer de l'ethereum à n'importe qui en rajoutant un message et un gif ! "
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Grâce à vous"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Par choix, nous n'enregistrons pas votre navigation car nous privilégions la navigation privée. Cependant, en tant que plateforme gratuite et non monétisée, nous avons besoin de votre aide. Si vous le pouvez, pensez à nous !"
        />
      </div>
    </div>
  </div>
);

export default Services;