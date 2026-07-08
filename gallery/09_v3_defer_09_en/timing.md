# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.44s  <ret> 발화 (turn1 첫 프레임)
     5.68s  agent 발화 시작: <ret> Let me check availability for that request. Your reser
     5.79s  user  발화 끝
     7.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.42s]: (tool result) Three rooms are reserved at Ocean View Hotel in San Dieg
    14.95s  agent 발화 끝
    15.68s  user  발화 시작: Uh, can you send me a confirmation email?
    17.93s  <ret> 발화 (turn3 첫 프레임)
    18.08s  agent 발화 시작: <ret> Certainly, I can arrange that for you. The confirmatio
    18.27s  user  발화 끝
    19.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.41s]: (tool result) A confirmation email has been sent to user@example.com r
    26.84s  agent 발화 끝
    27.54s  user  발화 시작: Great, thanks. But… what’s the weather like there during tha
    31.39s  agent 발화 시작: February in San Diego is typically mild, with average highs 
    31.61s  user  발화 끝
    39.03s  agent 발화 끝
    39.04s  user  발화 시작: Right. And, um, are there any good hiking trails nearby?
    43.29s  agent 발화 시작: [sigh] I don't have current trail conditions readily availab
    43.43s  user  발화 끝
    50.70s  user  발화 시작: Yes, please.
    50.89s  agent 발화 끝
    51.00s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Torrey Pines State Natural Reserve is two point five mil
    51.96s  agent 발화 시작: <ret> Let me find some hiking trails near Ocean View Hotel. 
    52.13s  user  발화 끝
    62.26s  agent 발화 끝
