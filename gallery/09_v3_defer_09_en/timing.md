# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.85s  <ret> 발화 (turn1 첫 프레임)
     6.08s  agent 발화 시작: <ret> Certainly, let me confirm those details for you. Your 
     6.25s  user  발화 끝
     7.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.33s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    19.39s  agent 발화 끝
    20.14s  user  발화 시작: Uh, can you send me a confirmation email?
    22.19s  <ret> 발화 (turn3 첫 프레임)
    22.34s  agent 발화 시작: <ret> Of course, I can arrange that right away. I’ve just se
    22.53s  user  발화 끝
    23.95s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.82s]: (tool result) Confirmation email sent to the address associated with y
    31.15s  agent 발화 끝
    31.79s  user  발화 시작: Great. What’s the weather forecast for San Diego during that
    35.88s  agent 발화 시작: Let me check on that for you, give me a moment.
    36.09s  user  발화 끝
    37.09s  user  발화 시작: Right.
    37.82s  user  발화 끝
    38.49s  user  발화 시작: Okay, thanks.
    38.52s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The forecast for San Diego, February tenth through seven
    38.65s  agent 발화 끝
    39.44s  agent 발화 시작: <ret> As promised, here’s that forecast information. San Die
    39.69s  user  발화 끝
    51.04s  agent 발화 끝
