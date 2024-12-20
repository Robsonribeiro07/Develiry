import { HeaderContainer } from "./style";
import { useEffect, useState } from 'react';
import { BatteryFull, WifiHigh, CellSignalHigh } from '@phosphor-icons/react';

interface HeaderProps {
  backgroundColor: string;
  Color: string; 
}

export function Header(props: HeaderProps) {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutos: new Date().getMinutes().toString().padStart(2, '0')
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutos: now.getMinutes().toString().padStart(2, '0')
      });
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, []); // Lista de dependências vazia

  return (
    <HeaderContainer color={props.backgroundColor} ColorText={props.Color}>
      <span>{`${time.hours}:${time.minutos}`}</span>
      <span>
        <WifiHigh size={24} />
        <CellSignalHigh size={24} />
        <BatteryFull size={24} />
      </span>
    </HeaderContainer>
  );
}
