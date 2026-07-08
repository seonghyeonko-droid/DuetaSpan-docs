# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.66s  <ret> 발화 (turn1 첫 프레임)
     4.73s  agent 발화 시작: <ret> Certainly, I can locate those images for you. I found 
     4.77s  user  발화 끝
     6.10s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.40s]: (tool result) Three image files were found: "Paris_Eiffel_Tower.jpg", 
    15.35s  agent 발화 끝
    15.42s  user  발화 시작: Oh, great! And can you send the Paris one to my husband, Dav
    19.01s  <ret> 발화 (turn3 첫 프레임)
    19.26s  user  발화 끝
    19.32s  agent 발화 시작: <ret> Sending photos is something I can easily handle. The E
    19.97s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.19s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was successfully sent 
    26.09s  user  발화 시작: Perfect, thank you! I— I mean, do you know if there are any 
    26.51s  agent 발화 끝
    31.53s  agent 발화 시작: That’s a wonderful area for glacial exploration, actually. L
    31.70s  user  발화 끝
    41.35s  agent 발화 끝
    41.48s  user  발화 시작: Okay, sounds good.
    41.66s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) A three-hour Mer de Glace tour is available tomorrow at 
    42.61s  agent 발화 시작: <ret> Right, I have an update on those tours now. A Mer de G
    42.77s  user  발화 끝
    51.51s  agent 발화 끝
