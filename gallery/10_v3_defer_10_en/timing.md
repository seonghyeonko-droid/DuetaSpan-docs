# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.69s  <ret> 발화 (turn1 첫 프레임)
     4.76s  agent 발화 시작: <ret> Certainly, I can locate those images for you. I’ve fou
     4.76s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.62s]: (tool result) Four files were found: "Paris_Eiffel_Tower.jpg", "Proven
    13.81s  agent 발화 끝
    13.84s  user  발화 시작: Oh, great! Can you send “Paris_Eiffel_Tower.jpg” to my husba
    18.20s  <ret> 발화 (turn3 첫 프레임)
    18.51s  user  발화 끝
    18.51s  agent 발화 시작: <ret> Absolutely, I can send that image right away. The imag
    19.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.66s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was sent to David succ
    23.10s  user  발화 시작: Perfect, thank you. Uh, what was the weather like in Nice on
    23.50s  agent 발화 끝
    27.58s  agent 발화 시작: Let me check on that for you.
    27.77s  user  발화 끝
    29.52s  agent 발화 끝
    29.59s  user  발화 시작: Okay, sounds good.
    30.06s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice on July fifteenth, 2023 was twenty-e
    31.01s  agent 발화 시작: <ret> Right, I have that weather information now. On July fi
    31.15s  user  발화 끝
    41.95s  agent 발화 끝
