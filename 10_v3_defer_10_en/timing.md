# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 Oh, excellent! Can you send “Paris | S3 Great, thanks. What's the weather  | S4 Okay, thanks.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.84s  <ret> 발화 (turn1 첫 프레임)
     4.91s  user  발화 끝
     4.91s  agent 발화 시작: <ret> Certainly, I can locate those images for you. I found 
     6.28s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.48s]: (tool result) Four files were found: "Paris_Eiffel_Tower.jpg", "Nice_B
     9.79s  user  발화 시작: Yeah.
    10.42s  user  발화 끝
    13.91s  user  발화 시작: Oh, excellent! Can you send “Paris_Eiffel_Tower.jpg” to my s
    14.04s  agent 발화 끝
    21.56s  <ret> 발화 (turn4 첫 프레임)
    21.88s  agent 발화 시작: <ret> Of course, I can send that image right away. The email
    22.02s  user  발화 끝
    22.52s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.36s]: (tool result) Email sent to elise.dupont@example.com with subject "Par
    25.22s  user  발화 시작: Yeah.
    25.77s  user  발화 끝
    30.09s  agent 발화 끝
    31.10s  user  발화 시작: Great, thanks. What's the weather like in Nice right now?
    34.94s  user  발화 끝
    35.19s  agent 발화 시작: Let me check on that for you.
    36.02s  user  발화 시작: Right.
    36.75s  user  발화 끝
    36.80s  user  발화 시작: Okay, thanks.
    36.91s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The current weather in Nice, France is twenty-two degree
    37.03s  agent 발화 끝
    37.85s  agent 발화 시작: <ret> Right, I have that weather information now for you. It
    37.95s  user  발화 끝
    48.75s  agent 발화 끝
