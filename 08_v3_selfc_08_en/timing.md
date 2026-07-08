# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you screenshot the error message as a data URI?
     2.90s  <ret> 발화 (turn1 첫 프레임)
     3.22s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.42s]: (tool result) Screenshot saved as a data URI: data:image/png;base64,iV
     3.49s  agent 발화 시작: <ret> Certainly. The error message screenshot is available a
     3.65s  user  발화 끝
     9.75s  agent 발화 끝
    10.99s  user  발화 시작: That's… really small. Can you get a full-page screenshot ins
    14.06s  <ret> 발화 (turn3 첫 프레임)
    14.62s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.96s]: (tool result) Full-page screenshot saved as a data URI: data:image/png
    14.66s  agent 발화 시작: <ret> Of course. The full page screenshot of the error
    14.78s  user  발화 끝
    18.97s  agent 발화 끝
