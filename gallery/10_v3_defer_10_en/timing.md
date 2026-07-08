# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.68s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     4.76s  agent 발화 시작: <ret> Let’s see what I can locate for you… I found three pic
     6.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.23s]: (tool result) Three image files were found: "Paris_Eiffel_Tower.jpg", 
    13.22s  user  발화 시작: Oh, excellent! Could you send “Paris_Eiffel_Tower.jpg” to my
    13.24s  agent 발화 끝
    22.42s  <ret> 발화 (turn3 첫 프레임)
    22.64s  user  발화 끝
    22.73s  agent 발화 시작: <ret> Certainly, I can handle that for you… The photo has be
    23.38s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.81s]: (tool result) Email sent to eleanor.vance@email.com with the attachmen
    31.00s  user  발화 시작: Perfect, thanks so much. Um, what was the weather like in Ni
    31.44s  agent 발화 끝
    36.09s  agent 발화 시작: That's a slightly more involved query, let me check on that.
    36.23s  user  발화 끝
    39.91s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice on July fifteenth, 2023 was twenty-e
    40.25s  agent 발화 끝
    40.29s  user  발화 시작: Okay.
    40.85s  agent 발화 시작: <ret> Right, I have that information now… On July fifteenth,
    41.01s  user  발화 끝
    50.92s  agent 발화 끝
