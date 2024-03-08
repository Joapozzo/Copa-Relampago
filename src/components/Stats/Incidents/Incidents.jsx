import React from 'react'
import { IncidentLocal, IndicentsContainer, IndicentsWrapper } from './IndicentsStyles'
import { AlignmentDivider, AlignmentTeam, AlignmentTeams } from '../Alignment/AlignmentStyles'
import EscudoCelta from '/Escudos/celta-de-vino.png'
import { HiLifebuoy, HiMiniStop, HiStar} from "react-icons/hi2";
import { useSelector } from 'react-redux';

const Incidents = () => {

const actions = useSelector((state) => state.planillero.planilla.actions)

const renderActionIcon = (action) => {
    switch (action.accion) {
      case 'Gol':
        return <HiLifebuoy/>;
      case 'Amarilla':
        return <HiMiniStop className="yellow" />;
      case 'Roja':
        return <HiMiniStop className="red" />;
      default:
        return null;
    }
  };

  return (
    <IndicentsWrapper>
        <h3>Incidencias</h3>
        <AlignmentDivider/>
        <AlignmentTeams>
            <AlignmentTeam>
                <img src={EscudoCelta} alt="" />
                <h3>Celta de Vino</h3>
            </AlignmentTeam>
            
            <AlignmentTeam>
                <h3>Celta de Vino</h3>
                <img src={EscudoCelta} alt="" />
            </AlignmentTeam>
        </AlignmentTeams>

        <IndicentsContainer>

        {actions.map((action, index) => (
          <IncidentLocal key={index} className={action.isLocalTeam ? 'local' : 'visit'}>
          <h3>{action.minuto}'</h3>
          {renderActionIcon(action)}
          <h4>{action.nombreJugador}</h4> {/* Change to action.nombre */}
          {/* {action.resultado && <p>({action.resultado})</p>} */}
        </IncidentLocal>
        ))}

        </IndicentsContainer>
    </IndicentsWrapper>
  )
}

export default Incidents