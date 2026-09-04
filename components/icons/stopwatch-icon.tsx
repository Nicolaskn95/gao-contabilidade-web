import React from 'react';

export const StopwatchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    {...props}
  >
    <style>
      {`
        .stopwatch-stroke {
          fill: none;
          stroke: var(--icon-color, currentColor);
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        
        .button-animation {
          animation: press-button var(--animation-duration, 2.5s) infinite;
          transform-origin: center;
        }

        .hand-animation {
          transform-origin: 50px 50px;
          animation: spin-hand var(--animation-duration, 2.5s) infinite;
        }

        @keyframes press-button {
          0% { transform: translateY(0px); }
          4% { transform: translateY(5px); }
          8% { transform: translateY(0px); }
          100% { transform: translateY(0px); }
        }

        @keyframes spin-hand {
          0%, 8% { 
            transform: rotate(0deg); 
          }
          8% {
            transform: rotate(0deg); 
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); /* Efeito de mola (spring) */
          }
          85%, 100% { 
            transform: rotate(360deg); 
          }
        }
      `}
    </style>

    <g className="stopwatch-stroke">
      {/* Argola lateral esquerda */}
      <circle cx="21" cy="21" r="6.5" />
      
      {/* Botão Reset direito */}
      <path d="M 77 23 L 81 19" />
      <path d="M 78 16 L 84 22" />

      {/* Haste central do botão superior */}
      <line x1="50" y1="3" x2="50" y2="12" />

      {/* Capa do Botão Superior (Animado) */}
      <line 
        id="stopwatch-button" 
        className="button-animation"
        x1="42" y1="3" 
        x2="58" y2="3" 
        strokeWidth="4.5"
      />

      {/* Corpo principal do cronômetro */}
      <circle cx="50" cy="50" r="38" />

      {/* Mostrador (Marcadores principais) */}
      <line x1="50" y1="18" x2="50" y2="24" />
      <line x1="50" y1="82" x2="50" y2="76" />
      <line x1="18" y1="50" x2="24" y2="50" />
      <line x1="82" y1="50" x2="76" y2="50" />
      
      {/* Marcadores secundários (45 graus) */}
      <line x1="73" y1="27" x2="69" y2="31" />
      <line x1="27" y1="27" x2="31" y2="31" />
      <line x1="27" y1="73" x2="31" y2="77" />
      <line x1="73" y1="73" x2="69" y2="77" />

      {/* Ponteiro (Animado) */}
      <g id="stopwatch-hand" className="hand-animation">
        {/* Linha principal do ponteiro */}
        <line 
          x1="50" y1="58" 
          x2="50" y2="20" 
          stroke="var(--light-color, var(--color-gao-gold, #eab308))" 
          strokeWidth="3.5"
        />
        {/* Eixo central */}
        <circle 
          cx="50" cy="50" 
          r="4" 
          fill="var(--light-color, var(--color-gao-gold, #eab308))" 
          stroke="none" 
        />
      </g>
    </g>
  </svg>
);
