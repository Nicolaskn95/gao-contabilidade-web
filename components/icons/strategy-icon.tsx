import React from 'react';

export const StrategyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    {...props}
  >
    <style>
      {`
        .strategy-board-lines {
          fill: none;
          stroke: var(--icon-color, currentColor);
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.5;
        }

        .tactical-symbol {
          fill: none;
          stroke: var(--icon-color, currentColor);
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .tactical-arrow {
          fill: none;
          stroke: var(--light-color, var(--color-gao-gold, #eab308));
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          
          /* O tamanho 75 garante que a seta cubra totalmente a trajetória no dash */
          stroke-dasharray: 75;
          stroke-dashoffset: 75;
          animation: draw-erase 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Variações de tremores (tremble) para dar vida aos símbolos como se fossem jogadores em posição */
        .tremble-1 { animation: tremble-1 2.1s ease-in-out infinite; }
        .tremble-2 { animation: tremble-2 2.4s ease-in-out infinite; }
        .tremble-3 { animation: tremble-3 2.7s ease-in-out infinite; }

        @keyframes draw-erase {
          0%, 10% { stroke-dashoffset: 75; opacity: 0; }
          11% { opacity: 1; }
          45%, 55% { stroke-dashoffset: 0; opacity: 1; }
          90% { stroke-dashoffset: -75; opacity: 1; }
          91%, 100% { stroke-dashoffset: -75; opacity: 0; }
        }

        @keyframes tremble-1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(1.5px, -1.5px); }
          66% { transform: translate(-1.5px, 1.5px); }
        }
        @keyframes tremble-2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-1px, 1.5px); }
          66% { transform: translate(1.5px, -1px); }
        }
        @keyframes tremble-3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(1.5px, 1.5px); }
          66% { transform: translate(-1.5px, -1.5px); }
        }
      `}
    </style>

    {/* Prancheta Tática (Board) */}
    {/* ID claro e estrutura limpa e vetorial */}
    <g id="tactical-board" className="strategy-board-lines">
      {/* Contorno do campo/prancheta */}
      <rect x="8" y="12" width="84" height="76" rx="6" />
      {/* Linha de meio de campo */}
      <line x1="50" y1="12" x2="50" y2="88" />
      {/* Círculo central */}
      <circle cx="50" cy="50" r="14" />
      {/* Área esquerda */}
      <rect x="8" y="32" width="14" height="36" />
      {/* Área direita */}
      <rect x="78" y="32" width="14" height="36" />
    </g>

    {/* Elementos Táticos: Setas */}
    {/* Colocamos as setas primeiro para que fiquem sob os símbolos caso sobreponham */}
    <g id="tactical-arrows">
      {/* Seta 1: Movimento do X1 (Ataque) infiltrando na área (infiltração tática) */}
      <path 
        id="tactical-arrow-1" 
        className="tactical-arrow" 
        d="M 50 25 Q 65 25 78 42 L 74 38 M 78 42 L 79 36" 
      />
      {/* Seta 2: Passe curto do X2 para o X3 */}
      <path 
        id="tactical-arrow-2" 
        className="tactical-arrow" 
        d="M 45 52 L 53 60 L 48 60 M 53 60 L 53 55" 
      />
    </g>

    {/* Elementos Táticos: Símbolos X e O */}
    <g id="tactical-symbols" className="tactical-symbol">
      {/* Time O (Defesa) - IDs individuais claros */}
      <g id="tactical-o-1" className="tremble-1">
        <circle cx="26" cy="35" r="3.5" />
      </g>
      <g id="tactical-o-2" className="tremble-3">
        <circle cx="26" cy="50" r="3.5" />
      </g>
      <g id="tactical-o-3" className="tremble-2">
        <circle cx="26" cy="65" r="3.5" />
      </g>

      {/* Time X (Ataque) - IDs individuais claros */}
      <g id="tactical-x-1" className="tremble-2">
        <line x1="41" y1="21" x2="49" y2="29" />
        <line x1="41" y1="29" x2="49" y2="21" />
      </g>
      <g id="tactical-x-2" className="tremble-1">
        <line x1="36" y1="46" x2="44" y2="54" />
        <line x1="36" y1="54" x2="44" y2="46" />
      </g>
      <g id="tactical-x-3" className="tremble-3">
        <line x1="51" y1="61" x2="59" y2="69" />
        <line x1="51" y1="69" x2="59" y2="61" />
      </g>
    </g>
  </svg>
);
