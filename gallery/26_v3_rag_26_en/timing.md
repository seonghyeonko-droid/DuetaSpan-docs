# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, uh, I was wondering… what country has a flag that’s blac
     5.76s  agent 발화 시작: That’s a very common question, actually.
     5.87s  user  발화 끝
     7.82s  <ret> 발화 (turn2 첫 프레임)
     8.06s  agent 발화 시작: <ret> Let’s consider the colors and their historical associa
     8.17s  agent 발화 끝
     9.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.79s]: The flag of Germany features horizontal bands of black, red, and gold—
    17.06s  agent 발화 끝
    17.81s  user  발화 시작: Oh, right. Germany. I knew that, I think. [laugh] It just… s
    21.74s  agent 발화 시작: It’s easy to misremember details, even about national symbol
    21.83s  user  발화 끝
    25.66s  <ret> 발화 (turn5 첫 프레임)
    25.97s  agent 발화 시작: <ret> Thinking about flags often brings to mind empires. The
    26.14s  agent 발화 끝
    27.02s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.12s]: The Kingdom of Benin, a West African state, used red, black, and white
    34.55s  agent 발화 끝
    34.64s  user  발화 시작: Interesting. Were those colors symbolic, like in Germany?
    38.56s  agent 발화 시작: Indeed, symbolism was crucial in West African societies.
    38.71s  user  발화 끝
    42.17s  <ret> 발화 (turn8 첫 프레임)
    42.56s  agent 발화 시작: <ret> The colors often reflected the ruler’s power and linea
    42.73s  agent 발화 끝
    43.77s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.02s]: The Oyo Empire’s flags prominently featured yellow, symbolizing wealth
    51.93s  agent 발화 끝
    52.57s  user  발화 시작: So yellow meant wealth? That’s… pretty straightforward, I gu
    56.67s  agent 발화 시작: It was a very direct visual language, certainly.
    56.78s  user  발화 끝
    60.18s  agent 발화 끝
